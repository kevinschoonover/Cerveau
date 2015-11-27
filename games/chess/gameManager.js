// Generated by Creer at 09:34PM on November 23, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'
// Note: You should never modify this file.

var GameManager = require(__basedir + "/gameplay/shared/gameManager");
var serializer = require(__basedir + "/gameplay/serializer");

/**
 * An instance of the base GameManager class, given the structure of this Chess game so it can manage the game safely.
 */
var chessGameManager = new GameManager({
    Game: {
        name: "Chess",
    },

    AI: {
        runTurn: {
            args: [
            ],
            returns: {
                converter: serializer.defaultBoolean,
                defaultValue: true,
            },
        },
    },

    GameObject: {
        log: {
            args: [
                {
                    name: "message",
                    converter: serializer.defaultString,
                },
            ],
            returns: undefined,
        },
    },

    Piece: {
        move: {
            args: [
                {
                    name: "rank",
                    converter: serializer.defaultInteger,
                },
                {
                    name: "file",
                    converter: serializer.defaultInteger,
                },
                {
                    name: "promotionType",
                    converter: serializer.defaultString,
                    defaultValue: "",
                },
            ],
            returns: {
                converter: serializer.defaultBoolean,
                defaultValue: false,
            },
        },
    },

    Player: {
    },
});

module.exports = chessGameManager;