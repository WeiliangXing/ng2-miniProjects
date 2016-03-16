System.register(['angular2/angular2'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var PlayerComponent, App;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            PlayerComponent = (function () {
                function PlayerComponent() {
                    this.value = "";
                    this.shufflingDone = new angular2_1.EventEmitter();
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
                            clearInterval(interval);
                            _this.shufflingDone.next({ playerColor: _this.playerColor, element: _this.value });
                        }
                    }, 100);
                };
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', String)
                ], PlayerComponent.prototype, "playerColor", void 0);
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', String)
                ], PlayerComponent.prototype, "playerClass", void 0);
                __decorate([
                    angular2_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof angular2_1.EventEmitter !== 'undefined' && angular2_1.EventEmitter) === 'function' && _a) || Object)
                ], PlayerComponent.prototype, "shufflingDone", void 0);
                PlayerComponent = __decorate([
                    angular2_1.Component({
                        selector: "player",
                        template: "\n        <div [style.background-color]=\"playerColor\" class=\"player-container\">\n            <img [hidden]=\"!value\" src=\"http://demos.angular-craft.com/{{value}}.png\" [ng-class]=\"playerClass\" />\n        </div>\n    ",
                        directives: [angular2_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlayerComponent);
                return PlayerComponent;
                var _a;
            }());
            exports_1("PlayerComponent", PlayerComponent);
            ;
            App = (function () {
                function App() {
                    this.gameResult = "";
                    this.shufflingResults = new Array();
                }
                App.prototype.doStartGame = function (playerOne, playerTwo) {
                    this.shufflingResults = new Array();
                    this.gameResult = "";
                    playerOne.startShuffling();
                    playerTwo.startShuffling();
                };
                App.prototype.onElementSelected = function (playerResult) {
                    this.shufflingResults.push(playerResult);
                    if (this.shufflingResults.length == 2) {
                        this.gameResult = this.establishTheWinner();
                    }
                };
                App.prototype.establishTheWinner = function () {
                    if (this.shufflingResults[0].element == this.shufflingResults[1].element) {
                        return "it's a draw !";
                    }
                    if (((this.shufflingResults[0].element == "rock") && (this.shufflingResults[1].element == "scissors"))
                        || ((this.shufflingResults[0].element == "scissors") && (this.shufflingResults[1].element == "paper"))
                        || ((this.shufflingResults[0].element == "paper") && (this.shufflingResults[1].element == "rock"))) {
                        return this.shufflingResults[0].playerColor + " wins !!!";
                    }
                    return this.shufflingResults[1].playerColor + " wins !!!";
                };
                App = __decorate([
                    angular2_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Angular 2 Game <br>rock-paper-scissors</h1>\n    <player [player-color]=\"'BLUE'\" (shuffling-done)=\"onElementSelected($event)\" #playerone></player>\n    <player [player-class]=\"'right'\" [player-color]=\"'RED'\" (shuffling-done)=\"onElementSelected($event)\" #playertwo></player>\n    <div style=\"clear:both\"></div>\n    <br>\n    <button (click)=\"doStartGame(playerone, playertwo)\">Start game</button>\n    <p>{{gameResult}}</p>\n  ",
                        directives: [PlayerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map