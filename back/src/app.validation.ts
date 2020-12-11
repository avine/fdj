import { IsString } from 'class-validator';
import { IsValidObjectId } from './shared/object-id.validation';

export class GetTeamsDto {
  @IsValidObjectId()
  leagueId: string;
}

export class GetPlayersDto {
  @IsValidObjectId()
  teamId: string;
}

export class GetPlayersByTeamNameDto {
  @IsString()
  teamName: string;
}