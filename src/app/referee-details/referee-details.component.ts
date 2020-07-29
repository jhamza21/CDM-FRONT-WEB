import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Referee } from '../referee';
import { RefereeService } from '../referee.service';

@Component({
  selector: 'app-referee-details',
  templateUrl: './referee-details.component.html',
  styleUrls: ['./referee-details.component.css']
})
export class RefereeDetailsComponent implements OnInit {


  id: number;
  m: Referee;

  constructor(private route: ActivatedRoute,private router: Router,
    private refereeService: RefereeService) { }

  ngOnInit() {
    this.m = new Referee();

    this.id = this.route.snapshot.params['id'];
    
    this.refereeService.DetailsReferee(this.id)
      .subscribe(data => {
        console.log(data)
        this.m = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['allreferees']);
  }
}
