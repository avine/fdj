import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  players$: Observable<any>;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.players$ = this.activatedRoute.params
      .pipe(
        first(),
        switchMap(({ teamName }) => {
          return this.apiService.getPlayersByTeamName(teamName);
        })
      );
  }
}
