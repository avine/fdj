import { Injectable, BadRequestException } from '@nestjs/common';

import { LeaguesService } from './leagues/leagues.service';
import { PlayersService } from './players/players.service';
import { Player, TeamSummary } from './shared';
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
    return ({ leagues, teams, players });
  }

  async getTeams(leagueId: string): Promise<TeamSummary[]> {
    const teams = await this.leaguesService.findTeams(leagueId);
    if (!teams) {
      throw new BadRequestException();
    }
    return this.teamsService.filter(teams);
  }

  async getTeamsByLeagueName(leagueName: string): Promise<TeamSummary[]> {
    const teams = await this.leaguesService.findTeamsByLeagueName(leagueName);
    if (!teams) {
      throw new BadRequestException();
    }
    return this.teamsService.filter(teams);
  }

  async getPlayers(teamId: string): Promise<Player[]> {
    const players = await this.teamsService.findPlayers(teamId);
    if (!players) {
      throw new BadRequestException();
    }
    return this.playersService.filter(players);
  }

  async getPlayersByTeamName(teamName: string): Promise<Player[]> {
    const players = await this.teamsService.findPlayersByTeamName(teamName);
    if (!players) {
      throw new BadRequestException();
    }
    return this.playersService.filter(players);
  }
}
