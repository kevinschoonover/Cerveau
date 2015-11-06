// Generated by Creer at 06:57PM on November 06, 2015 UTC, git hash: '1b69e788060071d644dd7b8745dca107577844e1'

var Class = require(__basedir + "/utilities/class");
var serializer = require(__basedir + "/gameplay/serializer");
var log = require(__basedir + "/gameplay/log");
var GameObject = require("./gameObject");

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

// any additional requires you want can be required here safely between cree runs
//<<-- /Creer-Merge: requires -->>

// @class Forecast: The weather effect that will be applied at the end of a turn, which causes fires to spread.
var Forecast = Class(GameObject, {
    /**
     * Initializes Forecasts.
     *
     * @param {Object} data - a simple mapping passsed in to the constructor with whatever you sent with it. GameSettings are in here by key/value as well.
     */
    init: function(data) {
        GameObject.init.apply(this, arguments);

        /**
         * The Player that can use WeatherStations to control this Forecast when its the nextForecast.
         *
         * @type {Player}
         */
        this._addProperty("controllingPlayer", serializer.defaultGameObject(data.controllingPlayer));

        /**
         * The direction the wind will blow fires in. Can be 'north', 'east', 'south', or 'west'
         *
         * @type {string}
         */
        this._addProperty("direction", serializer.defaultString(data.direction));

        /**
         * How much of a Building's fire that can be blown in the direction of this Forecast. Fire is duplicated (copied), not moved (transfered).
         *
         * @type {number}
         */
        this._addProperty("intensity", serializer.defaultInteger(data.intensity));


        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

        // put any initialization logic here. the base variables should be set from 'data' above
        // NOTE: no players are connected (nor created) at this point. For that logic use 'begin()'

        //<<-- /Creer-Merge: init -->>
    },

    gameObjectName: "Forecast",


    //<<-- Creer-Merge: added-functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    // You can add additional functions here. These functions will not be directly callable by client AIs

    //<<-- /Creer-Merge: added-functions -->>

});

module.exports = Forecast;
