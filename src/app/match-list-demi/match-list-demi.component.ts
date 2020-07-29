import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import { Match } from '../match';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-match-list-demi',
  templateUrl: './match-list-demi.component.html',
  styleUrls: ['./match-list-demi.component.css']
})
export class MatchListDemiComponent implements OnInit {
  matchs: Observable<Match[]>;
 exist:boolean;

  constructor(private matchService: MatchService,
  private router: Router){}

  ngOnInit():void {
    this.matchs = this.matchService.GetAllMatchs();
    this.matchService.GetAllMatchs().subscribe(data => {if(data[60].name!=isNullOrUndefined)this.exist=true;
      else this.exist=false;
      });   }
  


  matchDetails(id: number){
    this.router.navigate(['details', id,4]);
  }

  updatematch(id: number){
    this.router.navigate(['update', id,4]);
  }
  isUpdated(m:Match){    
    if(m.scorea==null) return false; 
    if((m.scorea==m.scoreb)&&((m.penoa==m.penob)||m.penoa==null))return false;
    else return true;
   }


}
