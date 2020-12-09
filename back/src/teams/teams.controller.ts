import { Controller, Get } from '@nestjs/common';

import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  get() {
    return this.teamsService.findAll();
  }
}