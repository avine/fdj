import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getLeagues() {
    return this.httpClient.get<any[]>('http://localhost:3000/leagues/names');
  }

  getTeams(leagueId: string) {
    return this.httpClient.get<any[]>(`http://localhost:3000/api/leagues/${leagueId}/teams`);
  }

  getPlayers(teamId: string) {
    return this.httpClient.get<any[]>(`http://localhost:3000/api/teams/${teamId}/players`);
  }

  getPlayersByTeamName(teamName: string) {
    return this.httpClient.get<any[]>(`http://localhost:3000/api/teams/name/${teamName}/players`);
  }
}
