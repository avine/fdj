import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueApi } from '@fdj/shared';

import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesComponent implements OnInit {
  leagues$: Observable<LeagueApi[]>;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.leagues$ = this.apiService.getLeagues();
  }

  navigateToLeague(league: LeagueApi): void {
    this.router.navigate(['/leagues', league.name]);
  }
}
