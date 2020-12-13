import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import {
  GetPlayersByTeamNameDto,
  GetPlayersDto,
  GetTeamsByLeagueNameDto,
  GetTeamsDto,
} from './app.validation';
import { LeagueWithTeams, TeamWithPlayers } from './shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get('api/leagues/:leagueId/teams')
  getTeams(@Param() params: GetTeamsDto): Promise<LeagueWithTeams> {
    return this.appService.getTeams(params.leagueId);
  }

  @Get('api/leagues/name/:leagueName/teams')
  getTeamsByLeagueName(
    @Param() params: GetTeamsByLeagueNameDto,
  ): Promise<LeagueWithTeams> {
    return this.appService.getTeamsByLeagueName(params.leagueName);
  }

  @Get('api/teams/:teamId/players')
  getPlayers(@Param() params: GetPlayersDto): Promise<TeamWithPlayers> {
    return this.appService.getPlayers(params.teamId);
  }

  @Get('api/teams/name/:teamName/players')
  getPlayersByTeamName(
    @Param() params: GetPlayersByTeamNameDto,
  ): Promise<TeamWithPlayers> {
    return this.appService.getPlayersByTeamName(params.teamName);
  }
}
