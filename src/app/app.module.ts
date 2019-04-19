import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { BootstrapComponent } from 'src/bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
  //bootstrap: [AppComponent]
})
export class AppModule { }
