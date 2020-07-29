import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Observable<Team[]>;
  exist:boolean;
  constructor(private teamService: TeamService,
  private router: Router){}

  ngOnInit():void {
   this.teams= this.teamService.GetAllTeams();
   this.teamService.GetAllTeams().subscribe(data => {if(data[0].name!=isNullOrUndefined)this.exist=true;
  else this.exist=false;
  });   
  }
  deleteTeam(id: number) {
    this.teamService.DeleteTeam(id)
      .subscribe(
        data => {
         
          this.teams = this.teamService.GetAllTeams();
          alert("Team deleted !")
        },
        error => console.log(error));
        alert("Team can't be deleted !")

      }

  teamDetails(id: number){
    this.router.navigate(['detailsteam', id]);
  }

  updateteam(id: number){
    this.router.navigate(['updateteam', id]);
  }

 Exist()
 {

 }

}
