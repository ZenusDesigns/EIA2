//*/

namespace Task_11 {

    let serverAddress: string = "https://eia2mainbergerdaniel.herokuapp.com/"

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + inputPlayerName;
        query += "&score=" + highscore;
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let allPlayersArray: GameData[] = JSON.parse(xhr.response);

            document.getElementById("playername").innerHTML = "";
            document.getElementById("score").innerHTML = "";

            for (let i:number = allPlayersArray.length-8; i < allPlayersArray.length; i++) {
                document.getElementById("playername").innerHTML += `<div>${allPlayersArray[i].playername} : ${allPlayersArray[i].score}</div>`;
            }
            }
        }
    }


