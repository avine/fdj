import { IsString } from 'class-validator';

export class GetTeamsDto {
  @IsString()
  leagueId: string;
}

export class GetPlayersDto {
  @IsString()
  teamId: string;
}

export class GetPlayersByTeamNameDto {
  @IsString()
  teamName: string;
}