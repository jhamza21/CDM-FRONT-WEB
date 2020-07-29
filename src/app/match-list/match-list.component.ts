import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { Observable } from 'rxjs';
import { MatchService } from '../match.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  matchs: Observable<Match[]>;
  exist:boolean;

  constructor(private matchService: MatchService,
  private router: Router){}

  ngOnInit():void {
    this.matchs = this.matchService.GetAllMatchs();
    this.matchService.GetAllMatchs().subscribe(data => {if(data[0].name!=isNullOrUndefined)this.exist=true;
      else this.exist=false;
      }); 
  }
  


  matchDetails(id: number){
    this.router.navigate(['details', id,1]);
  }

  updatematch(id: number){
    this.router.navigate(['updatep', id]);
  }
  isUpdated(m:Match){    
   if(m.scorea==null) return false; 
   else return true;
  }

  

}
