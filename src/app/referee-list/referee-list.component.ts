import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Referee } from '../referee';
import { RefereeService } from '../referee.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.component.html',
  styleUrls: ['./referee-list.component.css']
})
export class RefereeListComponent implements OnInit {

  r: Observable<Referee[]>;
 exist:boolean;
  constructor(private refereeService: RefereeService,
  private router: Router){}

  ngOnInit():void {
    this.reloadData();
    this.refereeService.GetAllReferee().subscribe(data => {if(data[0].name!=isNullOrUndefined)this.exist=true;
      else this.exist=false;
      });
     
  }

  reloadData() {
    this.r = this.refereeService.GetAllReferee();
  }

  deleteReferee(id: number) {
    this.refereeService.DeleteReferee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  RefereeDetails(id: number){
    this.router.navigate(['detailsreferee', id]);
  }

  updateReferee(id: number){
    this.router.navigate(['updatereferee', id]);
  }

}
