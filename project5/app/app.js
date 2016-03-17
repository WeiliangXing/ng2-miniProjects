System.register(['angular2/core', './utils/minesweeper.component', './utils/game'], function(exports_1, context_1) {
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
    var core_1, minesweeper_component_1, game_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (minesweeper_component_1_1) {
                minesweeper_component_1 = minesweeper_component_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.ngOnInit = function () {
                    this.startNewGame();
                };
                App.prototype.startNewGame = function () {
                    this.game = game_1.createGame({ cols: 16, rows: 16, mines: 48 });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <minesweeper [game]=\"game\" #minesweeper></minesweeper>\n    <ul class=\"actions\">\n      <li><a (click)=\"startNewGame()\">New game</a></li>\n      <li><a (click)=\"minesweeper.undo()\" [hidden]=\"!minesweeper.canUndo()\">Undo</a></li>\n    </ul>\n    ",
                        directives: [minesweeper_component_1.MinesweeperComponent]
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