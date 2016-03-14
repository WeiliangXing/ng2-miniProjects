System.register(['angular2/core', './bookmark.service'], function(exports_1, context_1) {
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
    var core_1, bookmark_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_bookmarkService) {
                    this._bookmarkService = _bookmarkService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getBookmarks();
                };
                AppComponent.prototype.getBookmarks = function () {
                    var _this = this;
                    this._bookmarkService.getBookmarks()
                        .subscribe(function (bookmarks) { return _this.bookmarks = bookmarks; }, function (error) { return _this.errorMessage = error; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <h3>My Bookmarks:</h3>\n   <ul>\n     <li *ngFor=\"#bookmark of bookmarks\">\n       <strong>{{ bookmark.title }}</strong> - (<a href=\"{{bookmark.url}}\">{{bookmark.url}}</a>)\n     </li>\n   </ul>\n   ",
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map