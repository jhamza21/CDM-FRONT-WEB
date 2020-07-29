import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchListComponent } from './match-list/match-list.component';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { RefereeDetailsComponent } from './referee-details/referee-details.component';
import { UpdateRefereeComponent } from './update-referee/update-referee.component';
import { RefereeListComponent } from './referee-list/referee-list.component';
import { CreateRefereeComponent } from './create-referee/create-referee.component';
import { PoulesListComponent } from './poules-list/poules-list.component';
import { MatchListEliminationComponent } from './match-list-elimination/match-list-elimination.component';
import { MatchListQuartComponent } from './match-list-quart/match-list-quart.component';
import { MatchListDemiComponent } from './match-list-demi/match-list-demi.component';
import { MatchListFinalComponent } from './match-list-final/match-list-final.component';
import {UpdateMatchPoolComponent} from './update-match-pool/update-match-pool.component';
import { TeamStatConcededComponent } from './team-stat-conceded/team-stat-conceded.component';
import { TeamStatScoredComponent } from './team-stat-scored/team-stat-scored.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },

  { path: 'goalscored', component: TeamStatScoredComponent },
  { path: 'goalconceded', component: TeamStatConcededComponent },	
          


  //List matchs
  { path: 'all', component: MatchListComponent },//matchs premier tour
   { path: 'matchselim', component: MatchListEliminationComponent },
  { path: 'matchsquart', component: MatchListQuartComponent },
  { path: 'matchsdemi', component: MatchListDemiComponent },
  { path: 'matchfinal', component: MatchListFinalComponent },

  //List des poules
  { path: 'allpoules', component: PoulesListComponent },//poules premier tour


  //Gestion match
  { path: 'details/:id/:who', component: MatchDetailsComponent },
  { path: 'update/:id/:who', component: UpdateMatchComponent },
  { path: 'updatep/:id', component: UpdateMatchPoolComponent },

  //Gestion referee
  { path: 'allreferees', component: RefereeListComponent },
  { path: 'addreferee', component: CreateRefereeComponent },
  { path: 'updatereferee/:id', component: UpdateRefereeComponent },
  { path: 'detailsreferee/:id', component: RefereeDetailsComponent },
  //Gestion teams
  { path: 'addteam', component: CreateTeamComponent },
  { path: 'allteams', component: TeamListComponent },
  { path: 'updateteam/:id', component: UpdateTeamComponent },
  { path: 'detailsteam/:id', component: TeamDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
