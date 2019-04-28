import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';

@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    PlaygroundComponent
  ],
  providers: [],
  entryComponents: [PlaygroundComponent]
})
export class PlaygroundModule { }
