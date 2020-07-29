
  import { Component, OnInit } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Team } from '../team';
  import { TeamService } from '../team.service';
  import { Router } from '@angular/router';
  import { isNullOrUndefined } from 'util';
  @Component({
    selector: 'app-team-stat-scored',
    templateUrl: './team-stat-scored.component.html',
    styleUrls: ['./team-stat-scored.component.css']
  })
  export class TeamStatScoredComponent implements OnInit {
    teams: Observable<Team[]>;
    exist:boolean;
    constructor(private teamService: TeamService,
    private router: Router){}
  
    ngOnInit(): void {
      this.teams= this.teamService.Goal_Scored();
      this.teamService.Goal_Scored().subscribe(data => {if(data[0].name!=isNullOrUndefined)this.exist=true;
     else this.exist=false;
     });   
    }
  
  }
  