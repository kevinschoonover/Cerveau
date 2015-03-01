var Class = require("./structures/class");
var Client = require("./client");
var constants = require("./constants")

// @class Server: The main class that handles incomming conncetions from clients via socket.io and managing the games they play
var Server = Class({
	init: function(io) {
		this.io = io;
		this.clients = [];
		this.games = [];
		this.gameClasses = [];
		this.nextGameNumber = 1;

		(function(self) {
			self.io.on('connection', function(socket){
				console.log("new connection!");
				self.clients.push(new Client(socket));

				var client = self.clients.last();
				for(var property in self.__proto__) {
					if(property.startsWith("recieve")) {
						var clientMessageType = property.slice(7 /* length of "recieve"*/).toLowerCase();

						(function(clientMessageType, property) { // force it to be evaluated right now so the on callback has reference back to the current value of clientMessageType
							socket.on(clientMessageType, function(message) {
								self[property].call(self, client, message);
							});
						})(clientMessageType, property);
					}
				}

				(function(self, client) {
					socket.on('disconnect', function() {
						console.log("Client disconnected");
						self.clients.removeElement(client);

						if(client.game) {
							client.game.removeClient(client);

							if(client.game.over) {
								self.gameOver(client.game);
							}
						}
					});
				})(self, client);
			});
		})(this);
	},

	getGame: function(gameName, gameSession) {
		if(!this.games[gameName]) {
			this.gameClasses[gameName] = require("./games/" + gameName);
			this.games[gameName] = {};
		}

		if(gameSession === "*") { // then they want to join any game session
			gameSession = "new" // if we couldn't find one give them a new game
			var games = this.games[gameName];
			for(var session in games) {
				var game = games[session];
				if(!game.hasStarted() && !game.hasEnoughPlayers()) {
					gameSession = session;
					break;
				}
			}
		}

		if(gameSession === undefined || gameSession === "new") { // then they want a new empty game session
			gameSession = this.nextGameNumber++;
		}

		if(!this.games[gameName][gameSession]) {
			console.log("creating new game", gameName, gameSession);

			this.games[gameName][gameSession] = new this.gameClasses[gameName](gameName, gameSession);
		}

		return this.games[gameName][gameSession];
	},

	// sends a message to ALL clients. use with care.
	broadcast: function(event, message) {
		//console.log("---> ALL", event, message);
		this.io.emit(event, message);
	},

	// sends to a single/multiple clients the event and message
	sendTo: function(clients, event, message) {
		if(clients.socket) { // then they just sent a client, not an array of clients.
			clients = [clients];
		}

		for(var i = 0; i < clients.length; i++) {
			clients[i].send(event, message)
		}
	},

	sendStateOf: function(game) {
		this.sendTo(game.clients, "state", JSON.stringify(game.getState()));
	},

	getCurrentClientsFor: function(game) {
		var currentPlayers = game.getCurrentPlayers();
		var currentClients = [];
		for(var i = 0; i < currentPlayers.length; i++) {
			currentClients.push(game.getClientForPlayerID(currentPlayers[i].id));
		}
		return currentClients;
	},

	updatePlayersAwaitingAndIgnoringIn: function(game) {
		var currentClients = this.getCurrentClientsFor(game);

		for(var i = 0; i < game.clients.length; i++) {
			var client = game.clients[i];
			if(currentClients.contains(client)) {
				this.sendTo(client, "awaiting");
			}
			else {
				this.sendTo(client, "ignoring");
			}
		}
	},

	gameOver: function(game) {
		var clients = [];
		for(var i = 0; i < game.clients.length; i++) {
			var client = game.clients[i];
			if(!client.over) {
				client.over = true;
				clients.push(client);
			}
		}

		this.sendTo(clients, "over");
	},

	// Functions invoked when a client sends a raw message to the server
	recievePlay: function(client, json) {
		var data = JSON.parse(json);

		client.name = data.playerName || "Anonymous"
		var gameName = data.gameName;
		var gameSession = data.gameSession;

		var game = this.getGame(gameName, gameSession);
		game.addClient(client);
		console.log("player ", client.name, "joined", game.name, game.session, "which now has connections: ", game.clients.length);

		this.sendTo(client, "connected", JSON.stringify({
			playerName: client.name,
			gameName: game.name,
			gameSession: game.session,
		}));

		if(game.hasEnoughPlayers()) { // TODO: variable player count
			console.log("game", game.name, game.session, "starting!");
			game.start();

			for(var i = 0; i < this.clients.length; i++) {
				var client = this.clients[i];

				this.sendTo(client, "start", JSON.stringify({
					playerID: game.getPlayerForClient(client).id,
				}));
			}

			this.sendStateOf(game);

			this.updatePlayersAwaitingAndIgnoringIn(game)
		}
	},

	recieveCommand: function(client, json) {
		// do game logic!!!
		if(this.runCommandFor(client, json)) { // the command was valid
			this.sendStateOf(client.game);

			if(client.game.over) {
				this.gameOver(client.game);
			}
			else { // game is still in progress, so tell the players who can send command and who can't now that the game state has changed
				this.updatePlayersAwaitingAndIgnoringIn(client.game);
			}
		}
		else {
			this.sendTo(client, "invalid"); // TODO: rename
			this.sendStateOf(client.game);
		}
	},

	// when a client sends a command it is piped here. Then we will decipher what they sent and run that command (function) on the game that client is playing with the args they passed
	runCommandFor: function(client, json) {
		var game = client.game;
		var player = game.getPlayerForClient(client)
		var data = JSON.parse(json)

		for(var key in data) {
			var value = data[key]

			if(typeof(value) == "string" && value.startsWith(constants.ID_PREFIX)) { // convert strings that start with the id prefix to the object with their id
				data[key] = game.getByID(value.slice(1));
			}
		}

		if(game[data.command]) {
			return game[data.command].call(game, player, data);
		} else {
			console.log("ERROR! no command: ", command);
			return false;
		}
	},
});

module.exports = Server;
