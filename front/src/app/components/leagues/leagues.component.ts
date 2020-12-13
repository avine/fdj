import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueSummary, TeamSummary } from '@fdj/shared';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit {
  leagueName$: Observable<string>;

  teams$: Observable<TeamSummary[]>;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.leagueName$ = this.activatedRoute.params.pipe(
      map(({ leagueName }) => leagueName)
    );
    this.teams$ = this.leagueName$.pipe(
      switchMap((leagueName) => this.apiService.getTeamsByLeagueName(leagueName)),
      catchError(() => {
        // TODO: navigate to `NotFoundComponent`
        return [];
      })
    );
  }

  navigateToLeague(league: LeagueSummary): void {
    this.router.navigate(['/leagues', league.name]);
  }
}
