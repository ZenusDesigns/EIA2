//*/
var Task_11;
(function (Task_11) {
    let serverAddress = "https://eia2mainbergerdaniel.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + Task_11.inputPlayerName;
        query += "&score=" + Task_11.highscore;
        sendRequest(query, handleInsertResponse);
    }
    Task_11.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Task_11.refresh = refresh;
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
})(Task_11 || (Task_11 = {}));
//# sourceMappingURL=DBClient.js.map