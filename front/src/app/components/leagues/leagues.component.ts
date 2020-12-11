import { Component } from '@angular/core';
import { LeagueSummary } from '@fdj/shared';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent {
  teams: any;

  league: LeagueSummary;

  constructor(private apiService: ApiService) {}

  selectLeague(league: LeagueSummary): void {
    this.league = league;
    this.apiService
      .getTeamsSummary(league._id)
      .subscribe((teams) => (this.teams = teams));
  }
}
