import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {

  @Input() canControl;
  
  count: number = 10;
  countDownTimer = undefined;

  constructor() { }

  ngOnInit() {
  }

  toStartSequence(){
    if(!this.canControl){
      return;
    }

    if(this.countDownTimer){
      return;
    }
    
    this.countDownTimer = setInterval(() => {

      if(this.count == 0){
        clearInterval(this.countDownTimer);
      } else {
        this.count--;
      }
    }, 1000);
  }

}
