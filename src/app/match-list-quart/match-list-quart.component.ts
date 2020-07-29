import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import { Match } from '../match';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-match-list-quart',
  templateUrl: './match-list-quart.component.html',
  styleUrls: ['./match-list-quart.component.css']
})
export class MatchListQuartComponent implements OnInit {
  matchs: Observable<Match[]>;

exist:boolean;
  constructor(private matchService: MatchService,
  private router: Router){}

  ngOnInit():void {
    this.matchs = this.matchService.GetAllMatchs();
    this.matchService.GetAllMatchs().subscribe(data => {if(data[56].name!=isNullOrUndefined)this.exist=true;
      else this.exist=false;
      }); 
  }
  


  matchDetails(id: number){
    this.router.navigate(['details', id,3]);
  }

  updatematch(id: number){
    this.router.navigate(['update', id,3]);
  }
  isUpdated(m:Match){    
    if(m.scorea==null) return false; 
    if((m.scorea==m.scoreb)&&((m.penoa==m.penob)||m.penoa==null))return false;
    else return true;
   }
}
