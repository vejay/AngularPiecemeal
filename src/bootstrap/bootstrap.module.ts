import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    BootstrapComponent
  ],
  providers: [],
  entryComponents: [BootstrapComponent]
})
export class BootstrapModule { }
