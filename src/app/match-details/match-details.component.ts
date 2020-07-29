import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  
    id: number;
    m: Match;
    nb:number;
    who:number;

  
    constructor(private route: ActivatedRoute,private router: Router,
      private matchService: MatchService) { }
  
    ngOnInit() {
      this.m = new Match();
      this.id = this.route.snapshot.params['id'];
      this.who = this.route.snapshot.params['who'];
      this.matchService.DetailsMatch(this.id)
        .subscribe(data => {
          console.log(data)
          this.m = data;
        }, error => console.log(error));
        this.matchService.GetAllMatchs().subscribe(data => {this.nb=data.length ;}, error => console.log());
    }
  
    list(){
      if(this.who==1)this.router.navigate(['all']);
      if(this.who==2)this.router.navigate(['matchselim']);
      if(this.who==3)this.router.navigate(['matchsquart']);
      if(this.who==4)this.router.navigate(['matchsdemi']);
      if(this.who==5)this.router.navigate(['matchfinal']);    }
  }
  