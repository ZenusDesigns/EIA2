/*
Aufgabe:(Endabagbe -  Canvas - TIAABF)
Name: Daniel Mainberger
Matrikel: (260566)
Datum: (24.07.2019)
*/
var UnderTheSea;
(function (UnderTheSea) {
    document.addEventListener("DOMContentLoaded", init);
    let arrayAll = [];
    let fishPlayer;
    UnderTheSea.highscore = 0;
    let fps = 30;
    let img;
    function init() {
        UnderTheSea.cvs = document.getElementsByTagName("canvas")[0];
        UnderTheSea.rnd = UnderTheSea.cvs.getContext("2d");
        drawWorld();
        img = UnderTheSea.rnd.getImageData(0, 0, UnderTheSea.cvs.width, UnderTheSea.cvs.height);
        fishPlayer = new UnderTheSea.FishPlayer();
        fishPlayer.draw();
        document.addEventListener("keydown", movementPlayer);
        UnderTheSea.refresh();
        /*Generate Fish*/
        for (let i = 0; i <= 10; i++) {
            let x = Math.random() * UnderTheSea.cvs.width + 650;
            let y = Math.random() * UnderTheSea.cvs.height;
            let dx = Math.random() * 15;
            let fishE;
            fishE = new UnderTheSea.FishsE();
            fishE.x = x;
            fishE.y = y;
            fishE.dx = dx;
            arrayAll.push(fishE);
            fishE.draw();
        }
        for (let i = 0; i <= 5; i++) {
            let x = Math.random() * UnderTheSea.cvs.width;
            let y = Math.random() * UnderTheSea.cvs.height;
            let dx = Math.random() * 20;
            let fishB;
            fishB = new UnderTheSea.FishsB();
            fishB.x = x;
            fishB.y = y;
            fishB.dx = dx;
            arrayAll.push(fishB);
            fishB.draw();
        }
        update();
    }
    /*Delete Fish from array - (Eat) */
    function clear(object) {
        for (let i = 0; i < arrayAll.length; i++) {
            if (arrayAll[i] == object) {
                arrayAll.splice(i, 1);
            }
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        UnderTheSea.rnd.clearRect(0, 0, UnderTheSea.cvs.width, UnderTheSea.cvs.height);
        UnderTheSea.rnd.putImageData(img, 0, 0);
        fishPlayer.update();
        /*Death Condition and Playername Request*/
        for (let i = 0; i < arrayAll.length; i++) {
            arrayAll[i].update();
            if (fishPlayer.kanibalism(arrayAll[i]) == "dead") {
                clear(arrayAll[i]);
            }
            else if (fishPlayer.kanibalism(arrayAll[i]) == "gameover") {
                arrayAll.splice(0, arrayAll.length);
                UnderTheSea.inputPlayerName = prompt("Your score: " + UnderTheSea.highscore, "Your Name");
                UnderTheSea.insert();
                UnderTheSea.refresh();
            }
        }
        /*On Screen Score*/
        UnderTheSea.rnd.fillStyle = "black";
        UnderTheSea.rnd.font = "20px Arial";
        UnderTheSea.rnd.fillText("Points: " + UnderTheSea.highscore.toString(), 950, 40);
        /*Win Condition and Playername Request*/
        if (UnderTheSea.highscore == 1700) {
            alert("U WON");
            UnderTheSea.inputPlayerName = prompt("Your WIN-Score: " + UnderTheSea.highscore, "Your Name");
            UnderTheSea.insert();
            UnderTheSea.refresh();
            UnderTheSea.highscore = 0;
        }
    }
    /*Fish-Movement per Arrowkeys*/
    function movementPlayer(e) {
        if (e.keyCode == 37) {
            fishPlayer.x -= 20;
            fishPlayer.direction = "links";
        }
        else if (e.keyCode == 38) {
            fishPlayer.y -= 20;
        }
        else if (e.keyCode == 39) {
            fishPlayer.x += 20;
            fishPlayer.direction = "rechts";
        }
        else if (e.keyCode == 40) {
            fishPlayer.y += 20;
        }
    }
    function drawWorld() {
        let water = UnderTheSea.rnd.createLinearGradient(0, 50, 0, 400);
        water.addColorStop(0, "#eef7fa");
        water.addColorStop(1, "#add8e6");
        UnderTheSea.rnd.fillStyle = water;
        UnderTheSea.rnd.fillRect(0, 0, UnderTheSea.cvs.width, UnderTheSea.cvs.height);
        let ground = new Path2D();
        ground.rect(0, 400, 1080, 400);
        UnderTheSea.rnd.fillStyle = "#c2b280";
        UnderTheSea.rnd.fill(ground);
        for (let i = 0; i < 1000; i++) {
            let _x = Math.random() * UnderTheSea.cvs.width;
            let _y = Math.random() * 600 + 400;
            let gravel = new Path2D();
            gravel.arc(_x, _y, 4, 0, 6 * Math.PI);
            UnderTheSea.rnd.fillStyle = "#565257";
            UnderTheSea.rnd.fill(gravel);
        }
        for (let i = 0; i < 150; i++) {
            let grass = new Path2D();
            let _x = Math.random() * UnderTheSea.cvs.width;
            let _y = Math.random() * UnderTheSea.cvs.height + 350;
            grass.moveTo(_x + 10, _y + 100);
            grass.lineTo(_x + 30, _y - 10);
            grass.lineTo(_x + 30, _y - 100);
            grass.closePath();
            UnderTheSea.rnd.fillStyle = "#002300";
            UnderTheSea.rnd.fill(grass);
            UnderTheSea.rnd.strokeStyle = "#002300";
            UnderTheSea.rnd.stroke(grass);
        }
    }
})(UnderTheSea || (UnderTheSea = {}));
//# sourceMappingURL=main.js.map