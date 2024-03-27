import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers :number[] = [];
  evenNumber :number[] = [];

  onEventImtr(counter){
    console.log(counter);
    if(counter%2===0){
      this.evenNumber.push(counter);
    }else{
      this.oddNumbers.push(counter);
    }
  }
}
