import { Component, HostBinding } from '@angular/core';
import { Observable, Subject, of, timer, interval } from 'rxjs';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  title = 'LerncafeWeb';

  type = 'Lern';
  names = ['Lern', 'Work', 'Chill', 'Haus', 'Home', 'Live']

  ngOnInit():void {
    this.takeNumbers();
  }
  
  takeNumbers(): void {
    let i: number = 0;
    interval(1500).subscribe(x => {
      if(i < this.names.length){
        this.type = this.names[i];
        i++;
      }else{
        i = 0;
      }
    });
  }
}