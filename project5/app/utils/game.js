// Credits to Christian Johansen for game logic:
// https://github.com/cjohansen/react-sweeper
System.register(['./util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var util_1;
    var directions;
    function initTiles(rows, cols, mines) {
        return util_1.shuffle(util_1.repeat(mines, Immutable.Map({ isMine: true, isRevealed: false })).
            concat(util_1.repeat(rows * cols - mines, Immutable.Map({ isRevealed: false })))).
            map(function (tile, idx) {
            return tile.set('id', idx);
        });
    }
    function onWEdge(game, tile) {
        return tile % game.get('cols') === 0;
    }
    function onEEdge(game, tile) {
        return tile % game.get('cols') === game.get('cols') - 1;
    }
    function idx(game, tile) {
        if (tile < 0) {
            return null;
        }
        return game.getIn(['tiles', tile]) ? tile : null;
    }
    function nw(game, tile) {
        return onWEdge(game, tile) ? null : idx(game, tile - game.get('cols') - 1);
    }
    function n(game, tile) {
        return idx(game, tile - game.get('cols'));
    }
    function ne(game, tile) {
        return onEEdge(game, tile) ? null : idx(game, tile - game.get('cols') + 1);
    }
    function e(game, tile) {
        return onEEdge(game, tile) ? null : idx(game, tile + 1);
    }
    function se(game, tile) {
        return onEEdge(game, tile) ? null : idx(game, tile + game.get('cols') + 1);
    }
    function s(game, tile) {
        return idx(game, tile + game.get('cols'));
    }
    function sw(game, tile) {
        return onWEdge(game, tile) ? null : idx(game, tile + game.get('cols') - 1);
    }
    function w(game, tile) {
        return onWEdge(game, tile) ? null : idx(game, tile - 1);
    }
    function neighbours(game, tile) {
        return util_1.keep(directions, function (dir) {
            return game.getIn(['tiles', dir(game, tile)]);
        });
    }
    function getMineCount(game, tile) {
        var nbs = neighbours(game, tile);
        return nbs.filter(util_1.prop('isMine')).length;
    }
    function isMine(game, tile) {
        return game.getIn(['tiles', tile, 'isMine']);
    }
    function isSafe(game) {
        var tiles = game.get('tiles');
        var mines = tiles.filter(util_1.prop('isMine'));
        return mines.filter(util_1.prop('isRevealed')) === 0 &&
            tiles.length - mines.length === tiles.filter(util_1.prop('isRevealed')).length;
    }
    function isGameOver(game) {
        return isSafe(game) || game.get('isDead');
    }
    exports_1("isGameOver", isGameOver);
    function addThreatCount(game, tile) {
        return game.setIn(['tiles', tile, 'threatCount'], getMineCount(game, tile));
    }
    function revealAdjacentSafeTiles(game, tile) {
        if (isMine(game, tile)) {
            return game;
        }
        game = addThreatCount(game, tile).setIn(['tiles', tile, 'isRevealed'], true);
        if (game.getIn(['tiles', tile, 'threatCount']) === 0) {
            return util_1.keep(directions, function (dir) {
                return dir(game, tile);
            }).reduce(function (game, pos) {
                return !game.getIn(['tiles', pos, 'isRevealed']) ?
                    revealAdjacentSafeTiles(game, pos) : game;
            }, game);
        }
        return game;
    }
    function attemptWinning(game) {
        return isSafe(game) ? game.set('isSafe', true) : game;
    }
    function revealMine(tile) {
        return tile.get('isMine') ? tile.set('isRevealed', true) : tile;
    }
    function revealMines(game) {
        return game.updateIn(['tiles'], function (tiles) {
            return tiles.map(revealMine);
        });
    }
    function revealTile(game, tile) {
        var updated = !game.getIn(['tiles', tile]) ?
            game : game.setIn(['tiles', tile, 'isRevealed'], true);
        return isMine(updated, tile) ?
            revealMines(updated.set('isDead', true)) :
            attemptWinning(revealAdjacentSafeTiles(updated, tile));
    }
    exports_1("revealTile", revealTile);
    function createGame(options) {
        return Immutable.fromJS({
            cols: options.cols,
            rows: options.rows,
            playingTime: 0,
            tiles: initTiles(options.rows, options.cols, options.mines)
        });
    }
    exports_1("createGame", createGame);
    function tryMe() {
    }
    exports_1("tryMe", tryMe);
    return {
        setters:[
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            directions = [nw, n, ne, e, se, s, sw, w];
        }
    }
});
//# sourceMappingURL=game.js.map