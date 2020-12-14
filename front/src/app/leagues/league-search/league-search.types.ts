import { LeagueApi } from '@fdj/shared';

export interface LeagueSearchState {
  suggestions: LeagueApi[];
  selected: LeagueApi;
}
