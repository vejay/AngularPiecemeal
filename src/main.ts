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
    let ng2Loader = new DynamicNg2Loader(ng2ModulerRef.injector);
    
    //Container where you want the angular component to load.
    console.log('Bootstrap 2 module loaded');
    
    let container = document.getElementById("ng-component-container");
    container.className += "js-flex-container";
    //document.getElementById("non-angular").hidden = false;
    let loadedComponentRefs = new Map();

    document.getElementById('goto-angular').onclick = function() {
      console.log('create angular clicked');
      let parent = document.createElement('app-root-container');
      container.appendChild(parent);

      let componentRef = ng2Loader.loadComponentAtDom(AppComponent, parent, (instance) => {
          //instance.value = document.getElementById('text-input').nodeValue;          
      });

      loadedComponentRefs.set(componentRef.instance.componentId, componentRef);
    }

    document.getElementById('remove-angular-comp').onclick = function() {
      let idToRemove = (<HTMLInputElement>document.getElementById('remove-compId')).value;
      loadedComponentRefs.forEach( compRef => {
          if(compRef.instance.componentId == idToRemove) {
            compRef.destroy();
          }
      })
    }
  });
}

