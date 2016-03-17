System.register(['immutable'], function(exports_1) {
    "use strict";
    var Immutable;
    var fromJS, List, Map;
    function partition(size, coll) {
        var res = [];
        for (var i = 0, l = coll.size || coll.length; i < l; i += size) {
            res.push(coll.slice(i, i + size));
        }
        return fromJS(res);
    }
    function identity(v) {
        return v;
    }
    function prop(n) {
        return function (object) {
            return object instanceof Map ? object.get(n) : object[n];
        };
    }
    function keep(list, pred) {
        return list.map(pred).filter(identity);
    }
    function repeat(n, val) {
        var res = [];
        while (n--) {
            res.push(val);
        }
        return List(res);
    }
    function shuffle(list) {
        return list.sort(function () { return Math.random() - 0.5; });
    }
    return {
        setters:[
            function (Immutable_1) {
                Immutable = Immutable_1;
            }],
        execute: function() {
            fromJS = Immutable.fromJS, List = Immutable.List, Map = Immutable.Map;
            exports_1("partition", partition);
            exports_1("identity", identity);
            exports_1("prop", prop);
            exports_1("keep", keep);
            exports_1("repeat", repeat);
            exports_1("shuffle", shuffle);
        }
    }
});
//# sourceMappingURL=util.js.map