"use strict";
/**
 Abschlussaufgabe - TIAABF
 Daniel Mainberger
 Matrikel:
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let players;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://testuser:testuser123456@icedealermarkv-xgkle.mongodb.net/GameScores";
    databaseName = "GameScores";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        players = db.collection("Players");
    }
}
function insert(_doc) {
    players.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = players.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, players) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(players));
    }
}
exports.findAll = findAll;
function findData(_matrikel, _callback) {
    var cursor = players.find({ matrikel: _matrikel });
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, players) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(players));
    }
}
exports.findData = findData;
//# sourceMappingURL=Database.js.map