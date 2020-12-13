import { BadRequestException, Injectable } from '@nestjs/common';

import { LeaguesService } from './leagues/leagues.service';
import { PlayersService } from './players/players.service';
import { LeagueWithTeams, TeamWithPlayers } from './shared';
import { TeamsService } from './teams/teams.service';

@Injectable()
export class AppService {
  constructor(
    private leaguesService: LeaguesService,
    private teamsService: TeamsService,
    private playersService: PlayersService,
  ) {}

  async getAll() {
    const [leagues, teams, players] = await Promise.all([
      this.leaguesService.findAll(),
      this.teamsService.findAll(),
      this.playersService.findAll(),
    ]);
    return { leagues, teams, players };
  }

  async getTeams(leagueId: string): Promise<LeagueWithTeams> {
    const league = await this.leaguesService.findOne(leagueId);
    if (!league) {
      throw new BadRequestException();
    }
    const { _id, name } = league;
    const teams = await this.teamsService.filter(league.teams);
    return { _id, name, teams };
  }

  async getTeamsByLeagueName(leagueName: string): Promise<LeagueWithTeams> {
    const league = await this.leaguesService.findOneByName(leagueName);
    if (!league) {
      throw new BadRequestException();
    }
    const { _id, name } = league;
    const teams = await this.teamsService.filter(league.teams);
    return { _id, name, teams };
  }

  async getPlayers(teamId: string): Promise<TeamWithPlayers> {
    const team = await this.teamsService.findOne(teamId);
    if (!team) {
      throw new BadRequestException();
    }
    const { _id, name, thumbnail } = team;
    const players = await this.playersService.filter(team.players);
    return { _id, name, thumbnail, players };
  }

  async getPlayersByTeamName(teamName: string): Promise<TeamWithPlayers> {
    const team = await this.teamsService.findOneByName(teamName);
    if (!team) {
      throw new BadRequestException();
    }
    const { _id, name, thumbnail } = team;
    const players = await this.playersService.filter(team.players);
    return { _id, name, thumbnail, players };
  }
}
