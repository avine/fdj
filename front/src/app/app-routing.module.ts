import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaguesComponent } from './components/leagues/leagues.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/leagues' },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'leagues/:leagueName', component: LeaguesComponent },
  { path: 'teams/:teamName', component: TeamsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
