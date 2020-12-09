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

  getAll() {
    return Promise.all([
      this.leaguesService.findAll(),
      this.teamsService.findAll(),
      this.playersService.findAll(),
    ]);
  }
}
