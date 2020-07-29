import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  t: Team = new Team();
  teams:  Team[]=null;
  nb:number=0;
  constructor(private ms: TeamService,
    private router: Router){}

  ngOnInit() { 
    this.ms.GetAllTeams() .subscribe(data => {
      if(data.length==32){alert("Teams number is max");this.list();};
      this.nb=data.length;
    });
    

      }
  save() {
    this.t.point=0;
    this.t.gameplayed=0;
    this.ms.CreateTeam(this.t)
      .subscribe(data => { 
        if(data)alert("Team created");if(!data)alert("Team not created");  this.list();},
         error => {console.log(error) ,alert("Team not created")});
    this.t = new Team();
   
  }
  list(){
    this.router.navigate(['allteams']);
  }
}
