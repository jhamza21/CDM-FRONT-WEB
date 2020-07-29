import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTeamComponent } from './create-team/create-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamListComponent } from './team-list/team-list.component';
import { CreateRefereeComponent } from './create-referee/create-referee.component';
import { RefereeDetailsComponent } from './referee-details/referee-details.component';
import { RefereeListComponent } from './referee-list/referee-list.component';
import { UpdateRefereeComponent } from './update-referee/update-referee.component';
import { PoulesListComponent } from './poules-list/poules-list.component';
import { MatchListEliminationComponent } from './match-list-elimination/match-list-elimination.component';
import { MatchListDemiComponent } from './match-list-demi/match-list-demi.component';
import { MatchListFinalComponent } from './match-list-final/match-list-final.component';
import { MatchListQuartComponent } from './match-list-quart/match-list-quart.component';
import { UpdateMatchPoolComponent } from './update-match-pool/update-match-pool.component';
import { TeamStatConcededComponent } from './team-stat-conceded/team-stat-conceded.component';
import { TeamStatScoredComponent } from './team-stat-scored/team-stat-scored.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    MatchDetailsComponent,
    UpdateMatchComponent,
    HomeComponent,
    CreateTeamComponent,
    UpdateTeamComponent,
    TeamDetailsComponent,
    TeamListComponent,
    CreateRefereeComponent,
    RefereeDetailsComponent,
    RefereeListComponent,
    UpdateRefereeComponent,
    PoulesListComponent,
    MatchListEliminationComponent,
    MatchListDemiComponent,
    MatchListFinalComponent,
    MatchListQuartComponent,
    UpdateMatchPoolComponent,
    TeamStatConcededComponent,
    TeamStatScoredComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
