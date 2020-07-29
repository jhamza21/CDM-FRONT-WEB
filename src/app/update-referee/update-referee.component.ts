import { Component, OnInit } from '@angular/core';
import { Referee } from '../referee';
import { ActivatedRoute, Router } from '@angular/router';
import { RefereeService } from '../referee.service';

@Component({
  selector: 'app-update-referee',
  templateUrl: './update-referee.component.html',
  styleUrls: ['./update-referee.component.css']
})
export class UpdateRefereeComponent implements OnInit {

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
        this.m= data;
      }, error => {alert("Impossible to update !");console.log(error);this.List();});
  }


  onSubmit() {
    this.refereeService.UpdateReferee(this.id, this.m)
    .subscribe(data => {   if(data)alert("Referee updated");
    if(!data)alert("Referee not updated");this.List();},
     error => {console.log(error) ,alert("Referee not updated");});
   
  }

  List() {
    this.router.navigate(['allreferees']);
  }

}
