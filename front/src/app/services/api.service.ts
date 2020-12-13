import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueSummary, TeamWithPlayers, LeagueWithTeams } from '@fdj/shared';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getLeaguesSummary(): Observable<LeagueSummary[]> {
    return this.httpClient.get<LeagueSummary[]>('http://localhost:3000/leagues/names');
  }

  getTeamsSummary(leagueId: string): Observable<LeagueWithTeams> {
    return this.httpClient.get<LeagueWithTeams>(`http://localhost:3000/api/leagues/${leagueId}/teams`);
  }

  getTeamsByLeagueName(leagueName: string): Observable<LeagueWithTeams> {
    return this.httpClient.get<LeagueWithTeams>(`http://localhost:3000/api/leagues/name/${leagueName}/teams`);
  }

  getPlayers(teamId: string): Observable<TeamWithPlayers> {
    return this.httpClient.get<TeamWithPlayers>(`http://localhost:3000/api/teams/${teamId}/players`);
  }

  getPlayersByTeamName(teamName: string): Observable<TeamWithPlayers> {
    return this.httpClient.get<TeamWithPlayers>(`http://localhost:3000/api/teams/name/${teamName}/players`);
  }
}
