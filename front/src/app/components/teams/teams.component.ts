import { Observable, of } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamWithPlayers } from '@fdj/shared';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teamWithPlayers$: Observable<TeamWithPlayers>;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teamWithPlayers$ = this.activatedRoute.params
      .pipe(
        first(),
        switchMap(({ teamName }) => {
          return this.apiService.getPlayersByTeamName(teamName);
        }),
        catchError(() => {
          // TODO: navigate to `NotFoundComponent`...
          return of(null);
        })
      );
  }
}
