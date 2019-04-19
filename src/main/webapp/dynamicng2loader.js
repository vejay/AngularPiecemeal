define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DynamicNg2Loader = /** @class */ (function () {
        function DynamicNg2Loader(injector) {
            this.injector = injector;
            this.appRef = injector.get(core_1.ApplicationRef);
            this.zone = injector.get(core_1.NgZone);
            this.componentFactoryResolver = injector.get(core_1.ComponentFactoryResolver);
        }
        DynamicNg2Loader.prototype.loadComponentAtDom = function (component, dom, onInit) {
            var _this = this;
            var componentRef;
            this.zone.run(function () {
                try {
                    var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(component);
                    componentRef = componentFactory.create(_this.injector, [], dom);
                    onInit && onInit(componentRef.instance);
                    _this.appRef.attachView(componentRef.hostView);
                }
                catch (e) {
                    console.error("Unable to load component", component, "at", dom);
                    throw e;
                }
            });
            return componentRef;
        };
        return DynamicNg2Loader;
    }());
    exports.DynamicNg2Loader = DynamicNg2Loader;
});
