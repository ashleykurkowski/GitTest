import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  direction = 'down-right'


  ngOnInit(){
    let point = { x: 0, y: 0};
    this.movePoint(point);
  }

  movePoint(point: any){
    let step = 25;

    switch(this.direction) {
      case 'down-right':
        point.x += step;
        point.y += step;
        break;
      case 'down-left':
        point.x -= step;
        point.y += step;
        break;
      case 'up-right':
        point.x += step;
        point.y -= step;
        break;
      case 'up-left':
        point.x -= step;
        point.y -= step;
        break; 
    }

    if(point.x > document.documentElement.clientWidth){
      if(this.direction == 'down-right') {
        this.direction = 'down-left'; 
      }
      else {
        this.direction = 'up-left'
      }
    }

    if(point.y > document.documentElement.clientHeight){
      if(this.direction == 'down-right') {
        this.direction = 'up-right'; 
      }
      else {
        this.direction = 'up-left'
      }
    }

    if(point.x < 0){
      if(this.direction == 'down-left') {
        this.direction = 'down-right'; 
      }
      else {
        this.direction = 'up-right'
      }
    }

    if(point.y < 0 ){
      if(this.direction == 'up-right') {
        this.direction = 'down-right'; 
      }
      else {
        this.direction = 'down-left'
      }
    }

    this.moveDivToPoint(point);
    setTimeout( () => { this.movePoint(point)} ,25)
  }

  moveDivToPoint(point){
    var div = document.getElementById("circle");
    div.style.position = "absolute";
    div.style.left = point.x + 'px';
    div.style.top = point.y + 'px';
  }


}
