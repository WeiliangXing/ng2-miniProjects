System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "AppMe";
                    this.pusher = new Pusher('9fd1b33fcb36d968145f');
                    this.channels = [];
                }
                AppComponent.prototype.newSubscription = function () {
                    this.channels.push({ term: this.newSearchTerm, active: true });
                    this.newSearchTerm = '';
                };
                AppComponent.prototype.clearSearch = function (channel) {
                    var _this = this;
                    this.channels = this.channels.filter(function (ch) {
                        if (ch.term === channel.term) {
                            _this.toggleSearch(channel);
                        }
                        return ch.term !== channel.term;
                    });
                };
                AppComponent.prototype.toggleSearch = function (channel) {
                    for (var _i = 0, _a = this.channels; _i < _a.length; _i++) {
                        var ch = _a[_i];
                        if (ch.term === channel.term) {
                            ch.active = !ch.active;
                            break;
                        }
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map