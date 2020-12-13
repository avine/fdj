import { LeagueApi } from '@fdj/shared';

export interface SearchLeagueState {
  suggestions: LeagueApi[];
  selected: LeagueApi;
}
