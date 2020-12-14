import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NoDataModule } from '../no-data/no-data.module';
import { LeagueSearchComponent } from './league-search/league-search.component';
import { LeagueTeamsComponent } from './league-teams/league-teams.component';
import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesComponent } from './leagues.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NoDataModule,
    LeaguesRoutingModule,
  ],
  declarations: [LeagueSearchComponent, LeagueTeamsComponent, LeaguesComponent],
})
export class LeaguesModule {}
