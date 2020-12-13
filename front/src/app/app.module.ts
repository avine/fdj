import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { SearchLeagueComponent } from './components/leagues/search-league/search-league.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayerComponent } from './components/teams/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    SearchLeagueComponent,
    NotFoundComponent,
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
