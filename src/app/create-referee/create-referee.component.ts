import { Component, OnInit } from '@angular/core';
import { Referee } from '../referee';
import { Router } from '@angular/router';
import { RefereeService } from '../referee.service';
import { MatchService } from '../match.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-referee',
  templateUrl: './create-referee.component.html',
  styleUrls: ['./create-referee.component.css']
})
export class CreateRefereeComponent implements OnInit {
  r: Referee = new Referee();

  constructor(private rs: RefereeService,private router: Router){}

    
  ngOnInit() { 
  }
  onSubmit() {
    this.r.status=false;
       this.rs.CreateReferee(this.r)
      .subscribe(data => {   if(data)alert("Referee created");if(!data)alert("Referee not created");this.list();},
       error => {console.log(error) ,alert("Referee not created")});
      
    }
  list(){
    this.router.navigate(['allreferees']);
  }

}
