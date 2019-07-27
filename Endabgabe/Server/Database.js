"use strict";
/**
 Abschlussaufgabe - TIAABF
 Daniel Mainberger
 Matrikel:
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let players;
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://testuser:testuser123456@icedealermarkv-xgkle.mongodb.net/GameScores";
    databaseName = "GameScores";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log(_e);
    else {
        db = _client.db(databaseName);
        players = db.collection("Players");
    }
}
function insert(_doc) {
    players.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
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
            _callback(JSON.stringify(players));
    }
}
exports.findData = findData;
//# sourceMappingURL=Database.js.map