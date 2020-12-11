import { IsValidObjectId } from '../common/object-id.validation';

export class FindTeamsDto {
  @IsValidObjectId()
  leagueId: string;
}
