import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NonAngular Title From AppComponent';
  componentId = -1;
  
  constructor(private appService: AppService) {
      this.componentId = appService.getNextId();
  }
}
