import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {ComponentRef} from '@angular/core';
import {AppComponent} from './app/app.component';

import  {DynamicNg2Loader} from './app/dynamicng2loader';

import { environment } from './environments/environment';
import { containerRefreshEnd } from '@angular/core/src/render3';

if (environment.production) {
  enableProdMode();
}

if(environment.angularOnly) {
  //Directly bootstrap the appModule
  platformBrowserDynamic().bootstrapModule(AppModule).then(function(ng2ModulerRef){

    //let ng2Loader = new DynamicNg2Loader(ng2ModulerRef.injector);
    
    //Container where you want the angular component to load.
    let container = document.getElementById("angular-container");
    container.className += "js-flex-container";
    //document.getElementById("non-angular").hidden = false;
  });
}

