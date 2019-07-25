/**
 Abschlussaufgabe - TIAABF 
 Daniel Mainberger
 Matrikel:
 */

import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let players: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://testuser:testuser123456@icedealermarkv-xgkle.mongodb.net/GameScores";
    databaseName = "GameScores";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        players = db.collection("Players");
    }
}

export function insert(_doc: GameData): void {
    players.insertOne(_doc, handleInsert);
}

function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function findAll(_callback: Function): void {
    var cursor: Mongo.Cursor = players.find();
    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, players: GameData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(players));
    }
}
export function findData(_matrikel: number, _callback: Function): void {
    var cursor: Mongo.Cursor = players.find({ matrikel: _matrikel });
    cursor.toArray(prepareAnswer);

   
    function prepareAnswer(_e: Mongo.MongoError, players: GameData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(players));
    }
}