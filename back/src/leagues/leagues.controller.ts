import { Controller, Get } from '@nestjs/common';

import { LeaguesService } from './leagues.service';

@Controller('leagues')
export class LeaguesController {
  constructor(private leaguesService: LeaguesService) {}

  @Get()
  get() {
    return this.leaguesService.findAll();
  }
}
