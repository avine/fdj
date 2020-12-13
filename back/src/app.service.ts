import { BadRequestException, Injectable } from '@nestjs/common';

import { LeaguesService } from './leagues/leagues.service';
import { LeagueDocument } from './leagues/schemas/leagues.schema';
import { PlayersService } from './players/players.service';
import { LeagueApi, LeagueWithTeamsApi, TeamWithPlayersApi } from './shared';
import { TeamDocument } from './teams/schemas/teams.schema';
import { TeamsService } from './teams/teams.service';

@Injectable()
export class AppService {
  constructor(
    private leaguesService: LeaguesService,
    private teamsService: TeamsService,
    private playersService: PlayersService,
  ) {}

  // Just for demo purpose
  async getAll() {
    const [leagues, teams, players] = await Promise.all([
      this.leaguesService.findAll(),
      this.teamsService.findAll(),
      this.playersService.findAll(),
    ]);
    return { leagues, teams, players };
  }

  getLeagues(): Promise<LeagueApi[]> {
    return this.leaguesService.findAllNames();
  }

  async getTeams(leagueId: string): Promise<LeagueWithTeamsApi> {
    const league = await this.leaguesService.findOne(leagueId);
    return this.getTeamsByLeagueDocument(league);
  }

  async getTeamsByLeagueName(leagueName: string): Promise<LeagueWithTeamsApi> {
    const league = await this.leaguesService.findOneByName(leagueName);
    return this.getTeamsByLeagueDocument(league);
  }

  private async getTeamsByLeagueDocument(
    league: LeagueDocument,
  ): Promise<LeagueWithTeamsApi> {
    if (!league) {
      throw new BadRequestException();
    }
    const { _id, name } = league;
    const teams = await this.teamsService.filterSummary(league.teams);
    return { _id, name, teams };
  }

  async getPlayers(teamId: string): Promise<TeamWithPlayersApi> {
    const team = await this.teamsService.findOne(teamId);
    return this.getPlayersByTeamDocument(team);
  }

  async getPlayersByTeamName(teamName: string): Promise<TeamWithPlayersApi> {
    const team = await this.teamsService.findOneByName(teamName);
    return this.getPlayersByTeamDocument(team);
  }

  private async getPlayersByTeamDocument(
    team: TeamDocument,
  ): Promise<TeamWithPlayersApi> {
    if (!team) {
      throw new BadRequestException();
    }
    const { _id, name, thumbnail } = team;
    const players = await this.playersService.filter(team.players);
    return { _id, name, thumbnail, players };
  }
}
