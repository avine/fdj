import { Observable, of } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamWithPlayersApi } from '@fdj/shared';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teamWithPlayers$: Observable<TeamWithPlayersApi>;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.teamWithPlayers$ = this.activatedRoute.params
      .pipe(
        first(),
        switchMap(({ teamName }) => {
          return this.apiService.getPlayersByTeamName(teamName);
        }),
        catchError(() => {
          this.router.navigate(['/not-found']);
          return of(null);
        })
      );
  }
}
