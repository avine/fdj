import { Controller, Get, Param } from '@nestjs/common';

import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }
}
