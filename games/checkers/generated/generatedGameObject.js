// Generated by Creer at 01:45PM on September 12, 2015 UTC, git hash: '3f0e08b46657dff30d7c082da7471381f8a1ab62'
// Note: this file should never be modified, instead if you want to add game logic modify just the ../GameObject.js file. This is to ease merging main.data changes

var serializer = require(__basedir + "/gameplay/serializer");
var Class = require(__basedir + "/utilities/class");
var BaseGameObject = require(__basedir + "/gameplay/shared/baseGameObject");


// @class GeneratedGameObject: The generated version of the GameObject, that handles basic logic.
var GeneratedGameObject = Class(BaseGameObject, {
    init: function(data) {
        BaseGameObject.init.apply(this, arguments);


    },

    gameObjectName: "GameObject",

    _runLog: function(player, data, asyncReturn) {
        var message = serializer.toString(data.message);

        var returned = this.log(player, message, asyncReturn);
    },

});

module.exports = GeneratedGameObject;
