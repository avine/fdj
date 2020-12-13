import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { GetPlayersByTeamNameDto, GetPlayersDto, GetTeamsByLeagueNameDto, GetTeamsDto } from './app.validation';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get('api/leagues/:leagueId/teams')
  getTeams(@Param() params: GetTeamsDto) {
    return this.appService.getTeams(params.leagueId);
  }

  @Get('api/leagues/name/:leagueName/teams')
  getTeamsByLeagueName(@Param() params: GetTeamsByLeagueNameDto) {
    return this.appService.getTeamsByLeagueName(params.leagueName);
  }

  @Get('api/teams/:teamId/players')
  getPlayers(@Param() params: GetPlayersDto) {
    return this.appService.getPlayers(params.teamId);
  }

  @Get('api/teams/name/:teamName/players')
  getPlayersByTeamName(@Param() params: GetPlayersByTeamNameDto) {
    return this.appService.getPlayersByTeamName(params.teamName);
  }
}
