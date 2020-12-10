import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaguesComponent } from './components/leagues/leagues.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/leagues' },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'teams/:teamName', component: TeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
