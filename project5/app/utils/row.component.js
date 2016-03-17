System.register(['angular2/core', './tile.component'], function(exports_1, context_1) {
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
    var core_1, tile_component_1;
    var RowComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tile_component_1_1) {
                tile_component_1 = tile_component_1_1;
            }],
        execute: function() {
            RowComponent = (function () {
                function RowComponent() {
                    this.tileClick = new core_1.EventEmitter();
                }
                RowComponent.prototype.handleTileClick = function (tile) {
                    this.tileClick.next(tile);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], RowComponent.prototype, "row", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], RowComponent.prototype, "tileClick", void 0);
                RowComponent = __decorate([
                    core_1.Component({
                        selector: 'row',
                        template: "\n  <div class=\"row\">\n      <tile *ngFor=\"#tile of row\" [tile]=\"tile\" (click)=\"handleTileClick(tile)\"></tile>\n    </div>\n  ",
                        directives: [tile_component_1.TileComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RowComponent);
                return RowComponent;
            }());
            exports_1("RowComponent", RowComponent);
        }
    }
});
//# sourceMappingURL=row.component.js.map