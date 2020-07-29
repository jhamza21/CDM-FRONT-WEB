import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TeamService } from './team.service';
import { MatchService } from './match.service';
import { PoulesService } from './poules.service';
import { RefereeService } from './referee.service';
import { Observable } from 'rxjs';
import { Pool } from './pool';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p:Observable<Pool>;


  title = 'FIFA WORLD CUP';
  public constructor(private ps:PoulesService,private titleService: Title,private router: Router,
    private ts:TeamService,private rs:RefereeService,private ms:MatchService ) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  ngOnInit() {
  this.setTitle("FIFA WORLD CUP");

}

start_cup(){
  this.ps.DeleteAllPools().subscribe(data => console.log(data));
  this.ts.DeleteAllTeams().subscribe(data => console.log(data));
  this.ms.DeleteAllMatchs().subscribe(data => console.log(data));
  this.rs.DeleteAllReferees().subscribe(data => console.log(data));
  alert("Let's Start");
  }

  generer_pool(){
    this.ps.GenererPool().subscribe(data => {  console.log(data);
     if(data)alert("Group stage is ready");if(!data)alert("Check matchs !"); }
    , error => {console.log(error) ,alert("ERROR !"); });
  }
  generer_pool_p(){
    this.ps.GenererPoolP().subscribe(data => {   if(data)alert("Knockout stage is ready");
    if(!data)alert("Check matchs !");}
    , error => {console.log(error) ,alert("Error !");});
  }
  generer_pool_g(){
    this.ps.GenererPoolG().subscribe(data => {   if(data)alert("Quarter-finals is ready");
    if(!data)alert("Check matchs !");}
    , error => {console.log(error) ,alert("Error !");});
  }
  generer_pool_s(){
    this.ps.GenererPoolS().subscribe(data => {   if(data)alert("Semi-finals is ready");
    if(!data)alert("Check matchs !");}
    , error => {console.log(error) ,alert("Error!");});
    
  }
  generer_pool_f(){
    this.ps.GenererPoolF().subscribe(data => {   if(data){alert("Final is ready");};
    if(!data)alert("Check matchs !");}
    , error => {console.log(error) ,alert("Error !");});
    
  }
 
}