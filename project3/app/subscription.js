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
    var SubscriptionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SubscriptionComponent = (function () {
                function SubscriptionComponent() {
                    this.subscribed = false;
                }
                SubscriptionComponent.prototype.ngOnInit = function () {
                    this.subscribeToChannel();
                    this.tweets = [];
                    this.className = this.search.term.replace(' ', '-');
                };
                SubscriptionComponent.prototype.subscribeToChannel = function () {
                    var _this = this;
                    this.channel = this.pusher.subscribe(btoa(this.search.term));
                    this.channel.bind('new_tweet', function (data) {
                        _this.newTweet(data);
                    });
                    this.subscribed = true;
                };
                SubscriptionComponent.prototype.newTweet = function (data) {
                    this.tweets.push(data);
                };
                // TODO: bring back when working correctly (see bottom of ngAfterViewChecked)
                // This should fire anytime bindings are modified from AppComponent but it's not
                // Don't have time to debug at moment, but fix if you can :)
                // public ngOnChanges() {
                //   console.log(this.search);
                //   if (!this.search.active && this.subscribed) {
                //     this.ngOnDestroy();
                //   } else if (this.search.active && !this.subscribed) {
                //     this.subscribeToChannel();
                //   }
                // }
                SubscriptionComponent.prototype.ngOnDestroy = function () {
                    this.pusher.unsubscribe(btoa(this.search.term));
                    this.channel && this.channel.unbind();
                    this.subscribed = false;
                };
                SubscriptionComponent.prototype.ngAfterViewChecked = function () {
                    var listItem = document.querySelector(".channel-" + this.className);
                    if (listItem) {
                        listItem.scrollTop = listItem.scrollHeight;
                    }
                    // TODO: Remove when ngOnChanges above works properly
                    // Not sure why ngOnChanges is not working right now
                    if (!this.search.active && this.subscribed) {
                        this.ngOnDestroy();
                    }
                    else if (this.search.active && !this.subscribed) {
                        this.subscribeToChannel();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SubscriptionComponent.prototype, "search", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SubscriptionComponent.prototype, "pusher", void 0);
                SubscriptionComponent = __decorate([
                    core_1.Component({
                        selector: 'subscription',
                        templateUrl: './app/subscription.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SubscriptionComponent);
                return SubscriptionComponent;
            }());
            exports_1("default", SubscriptionComponent);
        }
    }
});
//# sourceMappingURL=subscription.js.map