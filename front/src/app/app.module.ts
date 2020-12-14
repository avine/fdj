import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesModule } from './leagues/leagues.module';
import { NoDataModule } from './shared/components/no-data/no-data.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerComponent } from './teams/player/player.component';
import { TeamsComponent } from './teams/teams.component';

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
