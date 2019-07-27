/**
 Abschlussaufgabe - TIAABF 
 Daniel Mainberger
 Matrikel:
 */

import * as Mongo from "mongodb";

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let players: Mongo.Collection;

if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://testuser:testuser123456@icedealermarkv-xgkle.mongodb.net/GameScores";
    databaseName = "GameScores";
}

Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log(_e);
    else {
        db = _client.db(databaseName);
        players = db.collection("Players");
    }
}

export function insert(_doc: GameData): void {
    players.insertOne(_doc, handleInsert);
}

function handleInsert(_e: Mongo.MongoError): void {
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
            _callback(JSON.stringify(players));
    }
}