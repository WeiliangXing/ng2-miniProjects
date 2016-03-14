System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bookmark;
    return {
        setters:[],
        execute: function() {
            Bookmark = (function () {
                function Bookmark(title, url) {
                    this.title = title;
                    this.url = url;
                }
                return Bookmark;
            }());
            exports_1("Bookmark", Bookmark);
        }
    }
});
//# sourceMappingURL=bookmark.js.map