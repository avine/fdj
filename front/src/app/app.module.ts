import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesModule } from './components/leagues/leagues.module';
import { NoDataModule } from './components/no-data/no-data.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayerComponent } from './components/teams/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeaguesModule,
    NoDataModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PlayerComponent,
    TeamsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
