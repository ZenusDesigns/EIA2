import * as Http from "http"; // Node-Modul wird aufgerufen/genutzt
import * as Url from "url";
import * as Mongo from "mongodb";


Mongo.connect("mongodb+srv:Monday:<roqny2-wicqav-hoKvod>@icedealermarkv-xgkle.mongodb.net/test?retryWrites=true",);

//function MongoCallback(db: any):void {

//};

	console.log("Starting server"); //Console gibt "starting Server" aus 
	let port: number = Number(process.env.PORT); // Variable vom Typ Number wird generiert. Umgebungsvariabel gibt an welcher Port angesteurt wird.
	if (!port) // bedingung: Falls Port anders als erwartet ist ->
		port = 8100; // Port auf 8100 stellen

	let server: Http.Server = Http.createServer(); // Variable vom Typ Http.Server wird generiert. und ein Server in dieser erstellt. 
	server.addListener("request", handleRequest); // Eventlistener request wird initialisert, bei Serveranfragen wird die darauf folgende Funktion ausgeführt
	server.addListener("listening", handleListen); // Eventlistener listening wird initialisert.
	server.listen(port); // Server reagiert auf angeben Port

	function handleListen(): void {  
		console.log("Listening"); // Erstellung der Funktion handleListen, sowie eine Kontrollausgabe in die Konsole
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // _request = Sicherung eingehende Nachricht des Ports &  _response = Antwort des Servers. 
		console.log("At your service Sir") // 

		_response.setHeader("content-type", "text/html; charset=utf-8"); // Header wird erstellt mit angegebenden Spezifikationen . 
		_response.setHeader("Access-Control-Allow-Origin", "*"); // Server_request kann von verschiedenen Orten aufgerufen werden. 

		//_response.write(_request.url); // request.url wird in response eingebunden.//

		_response.write("<h3> Zusammenfassung :</h3>");
		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query) 
			_response.write("<p>" + key + url.query[key] + "</p>");

		_response.end(); // Response wird beendet.
	}

