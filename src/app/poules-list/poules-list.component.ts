import { Component, OnInit } from '@angular/core';
import { Pool } from '../pool';
import { PoulesService } from '../poules.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-poules-list',
  templateUrl: './poules-list.component.html',
  styleUrls: ['./poules-list.component.css']
})
export class PoulesListComponent implements OnInit {
p:Observable<Pool>;
exist:boolean;
  constructor(private poulesService:PoulesService,
  private router: Router){}

  ngOnInit():void {

    this.poulesService.GetAllPools().subscribe(data => this.p=data);
    this.poulesService.GetAllPools().subscribe(data => {if(data[0].name!=isNullOrUndefined)this.exist=true;
      else this.exist=false;
      }); 
  }

  

}
