System.register(['angular2/core', './util', './game', './row.component'], function(exports_1, context_1) {
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
    var core_1, util_1, game_1, row_component_1;
    var MinesweeperComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (game_1_1) {
                game_1 = game_1_1;
            },
            function (row_component_1_1) {
                row_component_1 = row_component_1_1;
            }],
        execute: function() {
            MinesweeperComponent = (function () {
                function MinesweeperComponent() {
                    this.history = Immutable.List();
                }
                MinesweeperComponent.prototype.ngOnChanges = function (changes) {
                    // Only update game when game has actually changed
                    if (changes.hasOwnProperty('game')) {
                        this.updateGame();
                    }
                };
                MinesweeperComponent.prototype.updateGame = function (updateHistory) {
                    if (updateHistory === void 0) { updateHistory = true; }
                    this.rows = util_1.partition(this.game.get('cols'), this.game.get('tiles'));
                    if (updateHistory) {
                        this.history = this.history.push(this.game);
                    }
                };
                MinesweeperComponent.prototype.handleTileClick = function (tile) {
                    if (!tile) {
                        return;
                    }
                    if (game_1.isGameOver(this.game)) {
                        return;
                    }
                    var newGame = game_1.revealTile(this.game, tile.get('id'));
                    if (newGame !== this.game) {
                        this.game = newGame;
                        this.updateGame();
                    }
                    if (game_1.isGameOver(this.game)) {
                        window.alert('GAME OVER!');
                    }
                };
                MinesweeperComponent.prototype.undo = function () {
                    if (this.canUndo()) {
                        this.history = this.history.pop();
                        this.game = this.history.last();
                        // Don't update the history so we don't end up with
                        // the same game twice in the end of the list
                        this.updateGame(false);
                    }
                };
                MinesweeperComponent.prototype.canUndo = function () {
                    return this.history.size > 1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MinesweeperComponent.prototype, "game", void 0);
                MinesweeperComponent = __decorate([
                    core_1.Component({
                        selector: 'minesweeper',
                        template: "\n  <div class=\"board\">\n    <row *ngFor=\"#row of rows\" [row]=\"row\" (tile-click)=\"handleTileClick($event)\"></row>\n  </div>\n  ",
                        directives: [row_component_1.RowComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MinesweeperComponent);
                return MinesweeperComponent;
            }());
            exports_1("MinesweeperComponent", MinesweeperComponent);
        }
    }
});
//# sourceMappingURL=minesweeper.component.js.map