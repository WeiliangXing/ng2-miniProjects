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
    var WeatherItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WeatherItemComponent = (function () {
                function WeatherItemComponent() {
                }
                WeatherItemComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-item',
                        template: "\n        <article class=\"weather-element\">\n            <div class=\"col-1\">\n                <h3>Cityname</h3>\n                <p class=\"info\">CLOUDS</p>\n            </div>\n            <div class=\"col-2\">\n                <span class=\"temperature\">32\u00B0C</span>\n            </div>\n        </article>\n    ",
                        styleUrls: ['src/css/weather-item.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherItemComponent);
                return WeatherItemComponent;
            }());
            exports_1("WeatherItemComponent", WeatherItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWpCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsc1VBVVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7cUJBQzFDLENBQUM7O3dDQUFBO2dCQUdGLDJCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1REFFQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwid2VhdGhlci1lbGVtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICA8aDM+Q2l0eW5hbWU8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiPkNMT1VEUzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjMywrBDPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL3dlYXRoZXItaXRlbS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVySXRlbUNvbXBvbmVudCB7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
