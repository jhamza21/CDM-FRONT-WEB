import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {
  id: number;
  t: Team;

  constructor(private route: ActivatedRoute,private router: Router,
    private teamService: TeamService) { }

  ngOnInit() {
    this.t = new Team();

    this.id = this.route.snapshot.params['id'];
    
    this.teamService.DetailsTeam(this.id)
      .subscribe(data => {
        console.log(data)
        this.t= data;
      }, error =>{ alert("Impossible to update");console.log(error);this.List();});
  }

  update_team() {
    this.teamService.UpdateTeam(this.id, this.t)
    .subscribe(data => { if(data)alert("Team updated");if(!data)alert("Team not updated");},
     error => {console.log(error) ,alert("Team not updated")});
    this.t = new Team();
    this.List();
  }

  onSubmit() {
    this.update_team();    
  }

  List() {
    this.router.navigate(['allteams']);
  }
}
