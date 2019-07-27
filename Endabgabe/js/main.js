var Task_11;
(function (Task_11) {
    document.addEventListener("DOMContentLoaded", init);
    let arrayAll = [];
    let fishPlayer;
    Task_11.highscore = 0;
    let fps = 30;
    let img;
    function init() {
        Task_11.cvs = document.getElementsByTagName("canvas")[0];
        Task_11.rnd = Task_11.cvs.getContext("2d");
        drawWorld();
        img = Task_11.rnd.getImageData(0, 0, Task_11.cvs.width, Task_11.cvs.height);
        fishPlayer = new Task_11.FishPlayer();
        fishPlayer.draw();
        document.addEventListener("keydown", movementPlayer);
        for (let i = 0; i <= 10; i++) {
            let x = Math.random() * Task_11.cvs.width + 650;
            let y = Math.random() * Task_11.cvs.height;
            let dx = Math.random() * 15;
            let fishE;
            fishE = new Task_11.FishsE();
            fishE.x = x;
            fishE.y = y;
            fishE.dx = dx;
            arrayAll.push(fishE);
            fishE.draw();
        }
        for (let i = 0; i <= 5; i++) {
            let x = Math.random() * Task_11.cvs.width;
            let y = Math.random() * Task_11.cvs.height;
            let dx = Math.random() * 20;
            let fishB;
            fishB = new Task_11.FishsB();
            fishB.x = x;
            fishB.y = y;
            fishB.dx = dx;
            arrayAll.push(fishB);
            fishB.draw();
        }
        /* for (let i: number = 0; i <= 50; i++) {
             let x: number = Math.random() * cvs.width;
             let y: number = Math.random() * cvs.height;
             let dy: number = Math.random() * -2 - 1;
             let bubbleV2: Bubbles2;
             bubbleV2 = new Bubbles2();
             bubbleV2.x = x;
             bubbleV2.y = y;
             bubbleV2.dy = dy;
             arrayAll.push(bubbleV2);
             bubbleV2.draw();
         }*/
        update();
    }
    function deleteObject(object) {
        for (let i = 0; i < arrayAll.length; i++) {
            if (arrayAll[i] == object) {
                arrayAll.splice(i, 1);
            }
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Task_11.rnd.clearRect(0, 0, Task_11.cvs.width, Task_11.cvs.height);
        Task_11.rnd.putImageData(img, 0, 0);
        fishPlayer.update();
        for (let i = 0; i < arrayAll.length; i++) {
            arrayAll[i].update();
            if (fishPlayer.kanibalism(arrayAll[i]) == "dead") {
                deleteObject(arrayAll[i]);
            }
            else if (fishPlayer.kanibalism(arrayAll[i]) == "gameover") {
                arrayAll.splice(0, arrayAll.length);
                Task_11.inputPlayerName = prompt("Your score: " + Task_11.highscore, "Your Name");
                Task_11.insert();
                Task_11.refresh();
            }
        }
        Task_11.rnd.fillStyle = "black";
        Task_11.rnd.font = "20px Arial";
        Task_11.rnd.fillText("Points: " + Task_11.highscore.toString(), 950, 40);
    }
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
        let water = Task_11.rnd.createLinearGradient(0, 50, 0, 400);
        water.addColorStop(0, "#eef7fa");
        water.addColorStop(1, "#add8e6");
        Task_11.rnd.fillStyle = water;
        Task_11.rnd.fillRect(0, 0, Task_11.cvs.width, Task_11.cvs.height);
        let ground = new Path2D();
        ground.rect(0, 400, 1080, 400);
        Task_11.rnd.fillStyle = "#c2b280";
        Task_11.rnd.fill(ground);
        for (let i = 0; i < 1000; i++) {
            let _x = Math.random() * Task_11.cvs.width;
            let _y = Math.random() * 600 + 400;
            let gravel = new Path2D();
            gravel.arc(_x, _y, 4, 0, 6 * Math.PI);
            Task_11.rnd.fillStyle = "#565257";
            Task_11.rnd.fill(gravel);
        }
        for (let i = 0; i < 150; i++) {
            let grass = new Path2D();
            let _x = Math.random() * Task_11.cvs.width;
            let _y = Math.random() * Task_11.cvs.height + 350;
            grass.moveTo(_x + 10, _y + 100);
            grass.lineTo(_x + 30, _y - 10);
            grass.lineTo(_x + 30, _y - 100);
            grass.closePath();
            Task_11.rnd.fillStyle = "#002300";
            Task_11.rnd.fill(grass);
            Task_11.rnd.strokeStyle = "#002300";
            Task_11.rnd.stroke(grass);
        }
    }
})(Task_11 || (Task_11 = {}));
//# sourceMappingURL=main.js.map