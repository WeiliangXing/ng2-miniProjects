System.register(['angular2/core', './player'], function(exports_1, context_1) {
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
    var core_1, player_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            }],
        execute: function() {
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
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Angular 2 Game <br>rock-paper-scissors</h1>\n    <player [playerColor]=\"'BLUE'\" (shufflingDone)=\"onElementSelected($event)\" #playerone></player>\n    <player [playerClass]=\"'right'\" [playerColor]=\"'RED'\" (shufflingDone)=\"onElementSelected($event)\" #playertwo></player>\n    <div style=\"clear:both\"></div>\n    <br>\n    <button (click)=\"doStartGame(playerone, playertwo)\">Start game</button>\n    <p>{{gameResult}}</p>\n  ",
                        directives: [player_1.PlayerComponent]
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