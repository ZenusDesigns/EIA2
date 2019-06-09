document.addEventListener("DOMContentLoaded", init);
let rnd: CanvasRenderingContext2D;
let cvs: HTMLCanvasElement;

function init(): void {
    cvs = document.getElementsByTagName("canvas")[0];
    rnd = cvs.getContext("2d");

    water();
    ground();
    fish(600, 350);

    for (let i: number = 0; i < 15; i++) {
        let x: number = Math.random() * cvs.width;
        let y: number = Math.random() * cvs.height;
        bubbles(x, y);
    }

    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * cvs.width;
        let y: number = Math.random() * cvs.height
        fish(x, y);
    }

    for (let i: number = 0; i < 400; i++) {
        let x: number = Math.random() * cvs.width;
        let y: number = Math.random() * 500 + 480;
        gravel(x, y);
    }

   
}


function water(): void {
    let water: CanvasGradient = rnd.createLinearGradient(0,50,0,200);
    water.addColorStop(0, "#eef7fa");
    water.addColorStop(1,"#add8e6");
    rnd.fillStyle = water;
    rnd.fillRect(0,0, cvs.width, cvs.height);
}


function ground(): void {
    let ground: Path2D = new Path2D();
    ground.rect(0, 400, 800, 200);
    rnd.fillStyle = "#c2b280";
    rnd.fill(ground);
}


function bubbles(_x: number, _y: number): void {
    let bubbles: Path2D = new Path2D();
    bubbles.arc(_x, _y, 15, 0, 4 * Math.PI);
    rnd.strokeStyle = "#00c5cd";
    rnd.stroke(bubbles);
    rnd.fillStyle = "#eef7fa";
    rnd.fill(bubbles);
}

function gravel(_x: number, _y: number): void {
    let gravel: Path2D = new Path2D();
    gravel.arc(_x, _y, 4, 0, 6 * Math.PI);
    rnd.fillStyle = "#565257";
    rnd.fill(gravel);

}


function fish(_x: number, _y: number): void {
    let body: Path2D = new Path2D();
    body.ellipse(_x, _y, 15, 30, 1.5, 0, 2 * Math.PI);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(body);
  

    let tail: Path2D = new Path2D();
    tail.moveTo(_x - 30, _y + 4);
    tail.lineTo(_x - 50, _y + 10);
    tail.lineTo(_x - 50, _y - 1);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(tail);
    

    let eye: Path2D = new Path2D();
    eye.arc(_x + 20, _y - 2, 4, 0, 2 * Math.PI);
    rnd.fillStyle = "#FFFFFF";
    rnd.fill(eye);
    rnd.strokeStyle = "#000000";
    rnd.stroke(eye);

    let innereye: Path2D = new Path2D();
    innereye.arc(_x + 20, _y - 2, 2, 0, 2 * Math.PI);
    rnd.fillStyle = "#000000";
    rnd.fill(innereye);
}


