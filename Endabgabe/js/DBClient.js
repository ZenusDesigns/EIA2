/*
Aufgabe:(Endabagbe -  Canvas - TIAABF)
Name: Daniel Mainberger
Matrikel: (260566)
Datum: (24.07.2019)

*/
var UnderTheSea;
(function (UnderTheSea) {
    let serverAddress = "https://eia2mainbergerdaniel.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&playername=" + UnderTheSea.inputPlayerName;
        query += "&score=" + UnderTheSea.highscore;
        sendRequest(query, handleInsertResponse);
    }
    UnderTheSea.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    UnderTheSea.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let allPlayersArray = JSON.parse(xhr.response);
            document.getElementById("playername").innerHTML = "";
            document.getElementById("score").innerHTML = "";
            for (let i = allPlayersArray.length - 8; i < allPlayersArray.length; i++) {
                document.getElementById("playername").innerHTML += `<div>${allPlayersArray[i].playername} : ${allPlayersArray[i].score}</div>`;
            }
        }
    }
})(UnderTheSea || (UnderTheSea = {}));
//# sourceMappingURL=DBClient.js.map