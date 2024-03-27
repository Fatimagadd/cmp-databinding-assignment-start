import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() event_imtr = new EventEmitter<number>(); // Output to make the variable listinable by outside ..
  counter = 0;
  
  ngOnInit(){
  }

  start(){
    this.interval = setInterval(()=>{
      this.event_imtr.emit(this.counter + 1);
      this.counter++;
    } , 1000);
  }

  stop(){
    clearInterval(this.interval);
  }
}
