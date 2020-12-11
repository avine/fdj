import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueName, Player, TeamSummary } from '@fdj/shared';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getLeagueNames(): Observable<LeagueName[]> {
    return this.httpClient.get<LeagueName[]>('http://localhost:3000/leagues/names');
  }

  getTeamsSummary(leagueId: string): Observable<TeamSummary[]> {
    return this.httpClient.get<TeamSummary[]>(`http://localhost:3000/api/leagues/${leagueId}/teams`);
  }

  getPlayers(teamId: string): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`http://localhost:3000/api/teams/${teamId}/players`);
  }

  getPlayersByTeamName(teamName: string): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`http://localhost:3000/api/teams/name/${teamName}/players`);
  }
}
