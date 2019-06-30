namespace Task_12 {

document.addEventListener("DOMContentLoaded", init);
export let rnd: CanvasRenderingContext2D;
export let cvs: HTMLCanvasElement;
export let aquariumArray: aquarium[] = [];
let arrayFishE: fishsE [] = [];
let arrayFishB: fishsB [] = [];
let arrayBubbleV1: bubblesV1 [] = [];
let arrayBubbleV2: bubblesV2 [] = [];
let fps: number = 30;
let img:ImageData ;




function init(): void {
    cvs = document.getElementsByTagName("canvas")[0];
    rnd = cvs.getContext("2d");

    drawWorld();

    img = rnd.getImageData(0, 0, cvs.width, cvs.height);

    

    for (let i: number = 0; i <= 20; i++) {
        let _x: number = Math.random() * cvs.width;
        let _y: number = Math.random() * cvs.height-250;
        let dx: number = Math.random() * 15;
        let fishE: fishsE;
        fishE = new fishsE();
        fishE._x = _x;
        fishE._y = _y;
        fishE.dx = dx;
        arrayFishE.push(fishE);
        fishE.draw();
    }

    for (let i: number = 0; i <= 15; i++) {
        let _x: number = Math.random() * cvs.width;
        let _y: number = Math.random() * cvs.height+350;
        let dx: number = Math.random() * 20 - 5;
        let fishB: fishsB;
        fishB = new fishsB();
        fishB._x = _x;
        fishB._y = _y;
        fishB.dx = dx;
        arrayFishB.push(fishB);
        fishB.draw();
    }

    for (let i: number = 0; i <= 50; i++) {
        let _x: number = Math.random() * cvs.width;
        let _y: number = Math.random() * cvs.height;
        let dy: number = Math.random() * -3 - 1;
        let bubbleV1: bubblesV1;
        bubbleV1 = new bubblesV1();
        bubbleV1._x = _x;
        bubbleV1._y = _y;
        bubbleV1.dy = dy;
        arrayBubbleV1.push(bubbleV1);
        bubbleV1.draw();
    }

    for (let i: number = 0; i <= 50; i++) {
        let _x: number = Math.random() * cvs.width;
        let _y: number = Math.random() * cvs.height;
        let dy: number = Math.random() * -2 - 1;
        let bubbleV2: bubblesV2;
        bubbleV2 = new bubblesV2();
        bubbleV2._x = _x;
        bubbleV2._y = _y;
        bubbleV2.dy = dy;
        arrayBubbleV2.push(bubbleV2);
        bubbleV2.draw();
    }
    update();
}

function update(): void {
    window.setTimeout(update, 1000 / fps);
    rnd.clearRect(0, 0, cvs.width, cvs.height);
    rnd.putImageData(img, 0, 0);

    for (let i: number = 0; i < arrayFishE.length; i++) {
        arrayFishE[i].update();
    }

    for (let i: number = 0; i < arrayFishB.length; i++) {
        arrayFishB[i].update();
    }

    for (let i: number = 0; i < arrayBubbleV1.length; i++) {
        arrayBubbleV1[i].update();
    }

    for (let i: number = 0; i < arrayBubbleV2.length; i++) {
        arrayBubbleV2[i].update();
    }
}




function drawWorld(): void {

    let water: CanvasGradient = rnd.createLinearGradient(0,50,0,200);
    water.addColorStop(0, "#eef7fa");
    water.addColorStop(1,"#add8e6");
    rnd.fillStyle = water;
    rnd.fillRect(0,0, cvs.width, cvs.height);


    let ground: Path2D = new Path2D();
    ground.rect(0, 400, 800, 200);
    rnd.fillStyle = "#c2b280";
    rnd.fill(ground);


    for (let i: number = 0; i < 1000; i++) {
        let _x: number = Math.random() * cvs.width;
        let _y: number = Math.random() * 600 + 400;
        let gravel: Path2D = new Path2D();
        gravel.arc(_x, _y, 4, 0, 6 * Math.PI);
        rnd.fillStyle = "#565257";
        rnd.fill(gravel);
    }
    
    for (let i: number = 0; i < 150; i++) {
        let grass: Path2D = new Path2D();
        let _x: number = Math.random() * cvs.width;
        let _y: number = Math.random() * cvs.height + 350;
        grass.moveTo(_x + 10, _y + 100);
        grass.lineTo(_x + 30, _y - 10);
        grass.lineTo(_x + 30, _y - 100);
        grass.closePath();
        rnd.fillStyle = "#002300";
        rnd.fill(grass);
        rnd.strokeStyle = "#002300";
        rnd.stroke(grass);
    }





}}