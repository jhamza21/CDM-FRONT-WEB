import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';
import { RefereeService } from '../referee.service';
import { PoulesService } from '../poules.service';
import { Pool } from '../pool';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {
  id: number;
  m: Match= new Match();
  p:Pool[];
nb:number;
who:number;
erreur:boolean=true;

  constructor(private route: ActivatedRoute,private router: Router,
    private matchService: MatchService,private refereeService:RefereeService,private ps:PoulesService) { }

  ngOnInit() {
    this.m=new Match();
    this.id = this.route.snapshot.params['id'];
    this.who = this.route.snapshot.params['who'];
    this.matchService.DetailsMatch(this.id)
      .subscribe(data => {
        this.m= data;
      }, error => {console.log(error);this.List();});
      this.matchService.GetAllMatchs().subscribe(data => {this.nb=data.length ;}, error => console.log());
     
  }

  update_match() {        
    this.matchService.UpdateMatch(this.id, this.m)
    .subscribe(data => {  if(!data)alert("Match not updated");},
     error => {console.log(error) ,alert("Match not updated");});
     this.ps.GetAllPools()
    .subscribe(data => {  this.p=data; },
     error => {console.log(error) ,alert("ERROR");})
  }

  onSubmit() {
    this.update_match(); 
    if(this.m.scorea==this.m.scoreb)
    document.getElementById('id01').style.display='block';
    else {
      alert("Match updated")
      this.List();}
  }

  List() {
    if(this.who==2)this.router.navigate(['matchselim']);
    if(this.who==3)this.router.navigate(['matchsquart']);
    if(this.who==4)this.router.navigate(['matchsdemi']);
    if(this.who==5)this.router.navigate(['matchfinal']); 
  }

  onPenoSubmit(){
    if(this.m.penoa!=this.m.penob){
      this.matchService.Updatepeno(this.id, this.m)
      .subscribe(data => {  if(!data)alert("Penalt not updated");      
       alert("Match and penalty results updated");this.List();},
       error => {console.log(error) ,alert("Penalty not updated");}); 
    document.getElementById('id01').style.display='none';
    
  }
  else 
  this.erreur=false;
  }}