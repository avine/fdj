import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import {
  GetPlayersByTeamNameDto,
  GetPlayersDto,
  GetTeamsByLeagueNameDto,
  GetTeamsDto,
} from './app.validation';
import { LeagueApi, LeagueWithTeamsApi, TeamWithPlayersApi } from './shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Just for demo purpose
  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get('leagues/name')
  getLeagues(): Promise<LeagueApi[]> {
    return this.appService.getLeagues();
  }

  @Get('leagues/:leagueId/teams')
  getTeams(@Param() params: GetTeamsDto): Promise<LeagueWithTeamsApi> {
    return this.appService.getTeams(params.leagueId);
  }

  @Get('leagues/name/:leagueName/teams')
  getTeamsByLeagueName(
    @Param() params: GetTeamsByLeagueNameDto,
  ): Promise<LeagueWithTeamsApi> {
    return this.appService.getTeamsByLeagueName(params.leagueName);
  }

  @Get('teams/:teamId/players')
  getPlayers(@Param() params: GetPlayersDto): Promise<TeamWithPlayersApi> {
    return this.appService.getPlayers(params.teamId);
  }

  @Get('teams/name/:teamName/players')
  getPlayersByTeamName(
    @Param() params: GetPlayersByTeamNameDto,
  ): Promise<TeamWithPlayersApi> {
    return this.appService.getPlayersByTeamName(params.teamName);
  }
}
