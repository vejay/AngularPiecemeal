const {platformBrowserDynamic} = require ("@angular/platform-browser-dynamic");

function gotoAngular() {
    console.log('gotoAngular called');
    //TODO VKV: Perform  the dynamic loading of the component here.
       try {
            platformBrowserDynamic().bootstrapModule(AppModule).then(function(ng2ModulerRef){
                console.log('appModule loaded');
                //let ng2Loader = new DynamicNg2Loader(ng2ModulerRef.injector);

                //Container where you want the angular component to load.
                let container = document.getElementById("angular-container");
                container.className += "js-flex-container";
                //document.getElementById("non-angular").hidden = false;

              });
       } catch(e) {
            console.log(e);
       }

      //document.location.href = "angular-module.html";
}