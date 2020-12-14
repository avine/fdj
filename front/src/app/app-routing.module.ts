import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaguesComponent } from './components/leagues/leagues.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/leagues' },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'leagues/:leagueName', component: LeaguesComponent },
  { path: 'teams/:teamName', component: TeamsComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
