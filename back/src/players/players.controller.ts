import { Controller, Get } from '@nestjs/common';

import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  findAll() {
    return this.playersService.findAll();
  }
}
