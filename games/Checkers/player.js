// Generated by Creer, git hash fa0ddf38a9de12f1ec780817a1333033da78ca83
// Note: this is the file you should modify. The logic generated by Creer should be mostly in ./generated/
var Class = require("../../utilities/class");
var GeneratedPlayer = require("./generated/generatedPlayer");

// @class Player: A player in this game. Every AI controls one player.
var Player = Class(GeneratedPlayer, {
	init: function(data) {
		GeneratedPlayer.init.apply(this, arguments);

		// put any initialization logic here. the base variables should be set from 'data' in GeneratedPlayer's init function
	},



	/// Tells the server that this player is done with their turn.
	endTurn: function(player) {
		if(player !== this) {
			return this.game.declairLoser(player, "tried to end another player's turn");
		}

		return this.game.nextTurn();
	},
});

module.exports = Player;