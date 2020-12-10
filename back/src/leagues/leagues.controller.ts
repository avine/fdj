import { Controller, Get, Param } from '@nestjs/common';

import { LeaguesService } from './leagues.service';
import { FindTeamsDto } from './leagues.validation';

@Controller('leagues')
export class LeaguesController {
  constructor(private leaguesService: LeaguesService) {}

  @Get()
  findAll() {
    return this.leaguesService.findAll();
  }

  @Get('names')
  findAllNames() {
    return this.leaguesService.findAllNames();
  }

  @Get(':leagueId/teams')
  findTeams(@Param() params: FindTeamsDto) {
    return this.leaguesService.findTeams(params.leagueId);
  }
}
