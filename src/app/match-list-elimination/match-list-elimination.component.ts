import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import { Observable } from 'rxjs';
import { Match } from '../match';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-match-list-elimination',
  templateUrl: './match-list-elimination.component.html',
  styleUrls: ['./match-list-elimination.component.css']
})
export class MatchListEliminationComponent implements OnInit {
  matchs: Observable<Match[]>;
   exist:boolean;
  constructor(private matchService: MatchService,
  private router: Router){}

  ngOnInit():void {
    this.matchs = this.matchService.GetAllMatchs();
    this.matchService.GetAllMatchs().subscribe(data => {if(data[49].name!=isNullOrUndefined)this.exist=true;
      else this.exist=false;
      }); 
  }
  


  matchDetails(id: number){
    this.router.navigate(['details', id,2]);
  }

  updatematch(id: number){
    this.router.navigate(['update', id,2]);
  }
  isUpdated(m:Match){    
    if(m.scorea==null) return false; 
    if((m.scorea==m.scoreb)&&((m.penoa==m.penob)||m.penoa==null))return false;
    else return true;
   }

}
