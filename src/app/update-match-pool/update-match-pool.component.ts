import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { Pool } from '../pool';
import { ActivatedRoute, Router } from '@angular/router';
import { RefereeService } from '../referee.service';
import { PoulesService } from '../poules.service';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-update-match-pool',
  templateUrl: './update-match-pool.component.html',
  styleUrls: ['./update-match-pool.component.css']
})
export class UpdateMatchPoolComponent implements OnInit {
  id: number;
  m: Match= new Match();
  p:Pool[];


  constructor(private route: ActivatedRoute,private router: Router,
    private matchService: MatchService,private refereeService:RefereeService,private ps:PoulesService) { }

  ngOnInit() {
    this.m=new Match();
    this.id = this.route.snapshot.params['id'];
    this.matchService.DetailsMatch(this.id)
      .subscribe(data => {
        this.m= data;
      }, error => {console.log(error);this.List();});
  }

  update_match() {        
    this.matchService.UpdateMatchPool(this.id, this.m)
    .subscribe(data => {   if(data)alert("Match updated");if(!data)alert("Match not updated");this.List();},
     error => {console.log(error) ,alert("Match not updated");});
     this.ps.GetAllPools()
    .subscribe(data => {  this.p=data; },
     error => {console.log(error) ,alert("ERROR");});
     this.m = new Match();
    
  }

  onSubmit() {
    this.update_match(); 
  }

  List() {
    this.router.navigate(['all']);
  }

}