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

  ngOnInit():void {
    this.takeNumbers();
  }
  
  takeNumbers(): void {
    interval(1500).subscribe(x => {
      if (this.type === 'Lern') {
        this.type = 'Work';
      }else if(this.type === 'Work'){
        this.type = 'Chill';
      }else{
        this.type = 'Lern'
      }
    });
  }
}