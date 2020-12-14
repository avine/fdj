import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/leagues' },
  {
    path: 'leagues',
    loadChildren: () =>
      import('./components/leagues/leagues.module').then(
        (m) => m.LeaguesModule
      ),
  },
  { path: 'teams/:teamName', component: TeamsComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
