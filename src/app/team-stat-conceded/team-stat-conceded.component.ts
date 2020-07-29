
  import { Observable } from 'rxjs';
  import { Team } from '../team';
  import { TeamService } from '../team.service';
  import { Router } from '@angular/router';
  import { isNullOrUndefined } from 'util';import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-team-stat-conceded',
    templateUrl: './team-stat-conceded.component.html',
    styleUrls: ['./team-stat-conceded.component.css']
  })
  export class TeamStatConcededComponent implements OnInit {
    teams: Observable<Team[]>;
    exist:boolean;
    constructor(private teamService: TeamService,
    private router: Router){}
  
    ngOnInit(): void {
      this.teams= this.teamService.Goal_Conceded();
      this.teamService.Goal_Conceded().subscribe(data => {if(data[0].name!=isNullOrUndefined)this.exist=true;
     else this.exist=false;
     });   
    }
  
  }
  