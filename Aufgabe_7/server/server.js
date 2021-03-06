"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // Node-Modul wird aufgerufen/genutzt
const Url = require("url");
console.log("Starting server"); //Console gibt "starting Server" aus 
let port = Number(process.env.PORT); // Variable vom Typ Number wird generiert. Umgebungsvariabel gibt an welcher Port angesteurt wird.
if (!port) // bedingung: Falls Port anders als erwartet ist ->
    port = 8100; // Port auf 8100 stellen
let server = Http.createServer(); // Variable vom Typ Http.Server wird generiert. und ein Server in dieser erstellt. 
server.addListener("request", handleRequest); // Eventlistener request wird initialisert, bei Serveranfragen wird die darauf folgende Funktion ausgeführt
server.addListener("listening", handleListen); // Eventlistener listening wird initialisert.
server.listen(port); // Server reagiert auf angeben Port
function handleListen() {
    console.log("Listening"); // Erstellung der Funktion handleListen, sowie eine Kontrollausgabe in die Konsole
}
function handleRequest(_request, _response) {
    console.log("At your service Sir"); // 
    _response.setHeader("content-type", "text/html; charset=utf-8"); // Header wird erstellt mit angegebenden Spezifikationen . 
    _response.setHeader("Access-Control-Allow-Origin", "*"); // Server_request kann von verschiedenen Orten aufgerufen werden. 
    //_response.write(_request.url); // request.url wird in response eingebunden.//
    _response.write("<h3> Zusammenfassung :</h3>");
    let url = Url.parse(_request.url, true);
    for (let key in url.query)
        _response.write("<p>" + key + url.query[key] + "</p>");
    _response.end(); // Response wird beendet.
}
//# sourceMappingURL=server.js.map