import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueTeamsComponent } from './league-teams/league-teams.component';
import { LeagueTeamsResolver } from './league-teams/league-teams.resolver';
import { LeaguesComponent } from './leagues.component';

const routes: Routes = [
  {
    path: '',
    component: LeaguesComponent,
    children: [
      {
        path: ':leagueName',
        component: LeagueTeamsComponent,
        resolve: {
          data: LeagueTeamsResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesRoutingModule {}
