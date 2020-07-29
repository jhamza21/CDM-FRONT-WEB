import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

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
        this.t = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['allteams']);
  }
}
