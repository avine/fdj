import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeagueApi, TeamWithPlayersApi, LeagueWithTeamsApi } from '@fdj/shared';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getLeagues(): Observable<LeagueApi[]> {
    return this.httpClient.get<LeagueApi[]>('http://localhost:3000/leagues/name');
  }

  getTeams(leagueId: string): Observable<LeagueWithTeamsApi> {
    return this.httpClient.get<LeagueWithTeamsApi>(`http://localhost:3000/leagues/${leagueId}/teams`);
  }

  getTeamsByLeagueName(leagueName: string): Observable<LeagueWithTeamsApi> {
    return this.httpClient.get<LeagueWithTeamsApi>(`http://localhost:3000/leagues/name/${leagueName}/teams`);
  }

  getPlayers(teamId: string): Observable<TeamWithPlayersApi> {
    return this.httpClient.get<TeamWithPlayersApi>(`http://localhost:3000/teams/${teamId}/players`);
  }

  getPlayersByTeamName(teamName: string): Observable<TeamWithPlayersApi> {
    return this.httpClient.get<TeamWithPlayersApi>(`http://localhost:3000/teams/name/${teamName}/players`);
  }
}
