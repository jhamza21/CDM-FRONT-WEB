import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import { PausableObservable, pausable } from 'rxjs-pausable';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  pausable: PausableObservable<number>;
  paused = true;
  n:Number;
  winner:string="";
constructor(private router: Router,private matchService:MatchService){}

  
  ngOnInit(): void {
  this.matchService.GetAllMatchs().subscribe(data => {
    if(data[62].scorea<data[62].scoreb)this.winner=data[62].teams[1].name;
  else if (data[62].scorea>data[62].scoreb)this.winner=data[62].teams[0].name;
  else if (data[62].scorea==data[62].scoreb){
    if((data[62].penoa>data[62].penob))this.winner=data[62].teams[0].name;
    else this.winner=data[62].teams[1].name;
  }

  });
  this.shoot();
  this.pausable = interval(800)
    .pipe(pausable()) as PausableObservable<number>;
  this.pausable.subscribe(this.shoot.bind(this));
  this.pausable.pause();
  }

  win(){
if(this.winner=="")return false;
else return true;
  }
  shoot() {
    try {
      this.confetti({
        
        angle: this.random(60, 120),
        spread: this.random(10, 100),
        particleCount: this.random(120, 180),
        origin: {
            y: 0.6
        }
      });
    } catch(e) {
      // noop, confettijs may not be loaded yet
    }
  }
  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  toggle() {
    if (this.paused) {
      this.pausable.resume();
    } else {
      this.pausable.pause();
    }
    this.paused = !this.paused;
  }
  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }


}
