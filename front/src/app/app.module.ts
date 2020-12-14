import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueSearchComponent } from './components/leagues/league-search/league-search.component';
import { LeagueTeamsComponent } from './components/leagues/league-teams/league-teams.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayerComponent } from './components/teams/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueSearchComponent,
    LeagueTeamsComponent,
    LeaguesComponent,
    NoDataComponent,
    PageNotFoundComponent,
    PlayerComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
