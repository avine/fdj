import { Subscription } from 'rxjs';

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueWithTeamsApi } from '@fdj/shared';

@Component({
  selector: 'app-league-teams',
  templateUrl: './league-teams.component.html',
  styleUrls: ['./league-teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueTeamsComponent implements OnInit, OnDestroy {
  leagueWithTeams: LeagueWithTeamsApi;

  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe(({ data }) => {
      this.leagueWithTeams = data;
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
