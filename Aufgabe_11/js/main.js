var Task_11;
(function (Task_11) {
    document.addEventListener("DOMContentLoaded", init);
    let arrayFishE = [];
    let arrayFishB = [];
    let arrayBubbleV1 = [];
    let arrayBubbleV2 = [];
    let fps = 30;
    let img;
    function init() {
        Task_11.cvs = document.getElementsByTagName("canvas")[0];
        Task_11.rnd = Task_11.cvs.getContext("2d");
        drawWorld();
        img = Task_11.rnd.getImageData(0, 0, Task_11.cvs.width, Task_11.cvs.height);
        for (let i = 0; i <= 20; i++) {
            let _x = Math.random() * Task_11.cvs.width;
            let _y = Math.random() * Task_11.cvs.height - 250;
            let dx = Math.random() * 15;
            let fishE;
            fishE = new Task_11.fishsE();
            fishE._x = _x;
            fishE._y = _y;
            fishE.dx = dx;
            arrayFishE.push(fishE);
            fishE.draw();
        }
        for (let i = 0; i <= 15; i++) {
            let _x = Math.random() * Task_11.cvs.width;
            let _y = Math.random() * Task_11.cvs.height + 350;
            let dx = Math.random() * 20 - 5;
            let fishB;
            fishB = new Task_11.fishsB();
            fishB._x = _x;
            fishB._y = _y;
            fishB.dx = dx;
            arrayFishB.push(fishB);
            fishB.draw();
        }
        for (let i = 0; i <= 50; i++) {
            let _x = Math.random() * Task_11.cvs.width;
            let _y = Math.random() * Task_11.cvs.height;
            let dy = Math.random() * -3 - 1;
            let bubbleV1;
            bubbleV1 = new Task_11.bubblesV1();
            bubbleV1._x = _x;
            bubbleV1._y = _y;
            bubbleV1.dy = dy;
            arrayBubbleV1.push(bubbleV1);
            bubbleV1.draw();
        }
        for (let i = 0; i <= 50; i++) {
            let _x = Math.random() * Task_11.cvs.width;
            let _y = Math.random() * Task_11.cvs.height;
            let dy = Math.random() * -2 - 1;
            let bubbleV2;
            bubbleV2 = new Task_11.bubblesV2();
            bubbleV2._x = _x;
            bubbleV2._y = _y;
            bubbleV2.dy = dy;
            arrayBubbleV2.push(bubbleV2);
            bubbleV2.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Task_11.rnd.clearRect(0, 0, Task_11.cvs.width, Task_11.cvs.height);
        Task_11.rnd.putImageData(img, 0, 0);
        for (let i = 0; i < arrayFishE.length; i++) {
            arrayFishE[i].update();
        }
        for (let i = 0; i < arrayFishB.length; i++) {
            arrayFishB[i].update();
        }
        for (let i = 0; i < arrayBubbleV1.length; i++) {
            arrayBubbleV1[i].update();
        }
        for (let i = 0; i < arrayBubbleV2.length; i++) {
            arrayBubbleV2[i].update();
        }
    }
    function drawWorld() {
        let water = Task_11.rnd.createLinearGradient(0, 50, 0, 200);
        water.addColorStop(0, "#eef7fa");
        water.addColorStop(1, "#add8e6");
        Task_11.rnd.fillStyle = water;
        Task_11.rnd.fillRect(0, 0, Task_11.cvs.width, Task_11.cvs.height);
        let ground = new Path2D();
        ground.rect(0, 400, 800, 200);
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