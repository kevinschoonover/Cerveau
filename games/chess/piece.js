// Generated by Creer at 09:34PM on November 23, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'

var Class = require(__basedir + "/utilities/class");
var serializer = require(__basedir + "/gameplay/serializer");
var log = require(__basedir + "/gameplay/log");
var GameObject = require("./gameObject");

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

// any additional requires you want can be required here safely between Creer re-runs

//<<-- /Creer-Merge: requires -->>

// @class Piece: A chess piece
var Piece = Class(GameObject, {
    /**
     * Initializes Pieces.
     *
     * @param {Object} data - a simple mapping passsed in to the constructor with whatever you sent with it. GameSettings are in here by key/value as well.
     */
    init: function(data) {
        GameObject.init.apply(this, arguments);

        /**
         * When the piece has been captured (removed from the board) this is true. Otherwise false.
         *
         * @type {boolean}
         */
        this._addProperty("captured", serializer.defaultBoolean(data.captured));

        /**
         * The file (y) coordinate of the checker.
         *
         * @type {number}
         */
        this._addProperty("file", serializer.defaultInteger(data.file));

        /**
         * If the piece has moved from its starting position.
         *
         * @type {boolean}
         */
        this._addProperty("hasMoved", serializer.defaultBoolean(data.hasMoved));

        /**
         * The player that controls this chess Piece.
         *
         * @type {Player}
         */
        this._addProperty("owner", serializer.defaultGameObject(data.owner));

        /**
         * The rank (x) coordinate of the checker, traditionally represented as a letter.
         *
         * @type {number}
         */
        this._addProperty("rank", serializer.defaultInteger(data.rank));

        /**
         * The type of chess piece this is, either: "King", "Queen", "Knight", "Rook", "Bishop", or "Pawn"
         *
         * @type {string}
         */
        this._addProperty("type", serializer.defaultString(data.type));


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        this.captured = false;
        this.hasMoved = false;

        //<<-- /Creer-Merge: init -->>
    },

    gameObjectName: "Piece",


    /**
     * Moves the piece from its current location to the given rank and file.
     *
     * @param {Player} player - the player that called this.
     * @param {number} rank - The rank (x) coordinate to move to.
     * @param {number} file - The file (y) coordinate to move to.
     * @param {string} promotionType - If this is a Pawn moving to the end of the board then this parameter is what to promote it to.
     * @param {function} asyncReturn - if you nest orders in this function you must return that value via this function in the order's callback.
     * @returns {boolean} true if the move was valid, false otherwise
     */
    move: function(player, rank, file, promotionType, asyncReturn) {
        // <<-- Creer-Merge: move -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // Developer: Put your game logic for the Piece's move function here
        return false;

        // <<-- /Creer-Merge: move -->>
    },

    //<<-- Creer-Merge: added-functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    // You can add additional functions here. These functions will not be directly callable by client AIs

    //<<-- /Creer-Merge: added-functions -->>

});

module.exports = Piece;
