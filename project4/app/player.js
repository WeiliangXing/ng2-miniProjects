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
    var PlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlayerComponent = (function () {
                function PlayerComponent() {
                    this.value = "";
                    this.shufflingDone = new core_1.EventEmitter();
                }
                PlayerComponent.prototype.startShuffling = function () {
                    var _this = this;
                    var elements = ["rock", "paper", "scissors"];
                    var shufflingCounter = 0;
                    var SHUFFLING_MAX = 30;
                    var interval = setInterval(function () {
                        if (shufflingCounter < SHUFFLING_MAX) {
                            var randomIndex = Math.floor(Math.random() * 3);
                            _this.value = elements[randomIndex];
                            shufflingCounter++;
                        }
                        else {
                            clearInterval(interval); //stop time
                            //next and emit works, difference? not yet documented
                            _this.shufflingDone.emit({ playerColor: _this.playerColor, element: _this.value });
                        }
                    }, 100);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PlayerComponent.prototype, "playerColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PlayerComponent.prototype, "playerClass", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PlayerComponent.prototype, "shufflingDone", void 0);
                PlayerComponent = __decorate([
                    core_1.Component({
                        selector: "player",
                        template: "\n        <div [style.background-color]=\"playerColor\" class=\"player-container\">\n            <img [hidden]=\"!value\" src=\"http://demos.angular-craft.com/{{value}}.png\" [class.right]=\"playerClass\" />\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayerComponent);
                return PlayerComponent;
            }());
            exports_1("PlayerComponent", PlayerComponent);
            ;
        }
    }
});
//# sourceMappingURL=player.js.map