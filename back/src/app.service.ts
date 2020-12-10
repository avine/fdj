import { Injectable } from '@nestjs/common';

import { LeaguesService } from './leagues/leagues.service';
import { PlayersService } from './players/players.service';
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

  async getTeams(leagueId: string) {
    const teams = await this.leaguesService.findTeams(leagueId);
    return this.teamsService.filter(teams);
  }

  async getPlayers(teamId: string) {
    const players = await this.teamsService.findPlayers(teamId);
    return this.playersService.filter(players);
  }
}
