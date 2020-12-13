import { Controller, Get, Param } from '@nestjs/common';

import { LeagueSummary } from '../shared';
import { LeaguesService } from './leagues.service';
import { FindTeamsDto } from './leagues.validation';
import { LeagueDocument } from './schemas/leagues.schema';

@Controller('leagues')
export class LeaguesController {
  constructor(private leaguesService: LeaguesService) {}

  @Get()
  findAll() {
    return this.leaguesService.findAll();
  }

  @Get('names')
  findAllNames(): Promise<LeagueSummary[]> {
    return this.leaguesService.findAllNames();
  }

  @Get(':leagueId/teams')
  findTeams(@Param() params: FindTeamsDto): Promise<LeagueDocument> {
    return this.leaguesService.findOne(params.leagueId);
  }
}
