import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueSummary, LeagueWithTeams } from '@fdj/shared';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit {
  leagueWithTeams$: Observable<LeagueWithTeams>;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.leagueWithTeams$ = this.activatedRoute.params.pipe(
      map(({ leagueName }) => leagueName),
      filter(leagueName => !!leagueName),
      switchMap((leagueName) => this.apiService.getTeamsByLeagueName(leagueName)),
      catchError(() => {
        this.router.navigate(['/not-found']);
        return of(null);
      })
    );
  }

  navigateToLeague(league: LeagueSummary): void {
    this.router.navigate(['/leagues', league.name]);
  }
}
