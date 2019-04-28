import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { BootstrapComponent } from 'src/app/bootstrap/bootstrap.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [BootstrapComponent],
  entryComponents:[AppComponent]
  //bootstrap: [AppComponent]
})
export class AppModule { }
