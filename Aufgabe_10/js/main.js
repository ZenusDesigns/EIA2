document.addEventListener("DOMContentLoaded", init);
let rnd;
let cvs;
function init() {
    cvs = document.getElementsByTagName("canvas")[0];
    rnd = cvs.getContext("2d");
    water();
    ground();
    fish(600, 350);
    for (let i = 0; i < 15; i++) {
        let x = Math.random() * cvs.width;
        let y = Math.random() * cvs.height;
        bubbles(x, y);
    }
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * cvs.width;
        let y = Math.random() * cvs.height;
        fish(x, y);
    }
    for (let i = 0; i < 400; i++) {
        let x = Math.random() * cvs.width;
        let y = Math.random() * 500 + 480;
        gravel(x, y);
    }
}
function water() {
    let water = rnd.createLinearGradient(0, 50, 0, 200);
    water.addColorStop(0, "#eef7fa");
    water.addColorStop(1, "#add8e6");
    rnd.fillStyle = water;
    rnd.fillRect(0, 0, cvs.width, cvs.height);
}
function ground() {
    let ground = new Path2D();
    ground.rect(0, 400, 800, 200);
    rnd.fillStyle = "#c2b280";
    rnd.fill(ground);
}
function bubbles(_x, _y) {
    let bubbles = new Path2D();
    bubbles.arc(_x, _y, 15, 0, 4 * Math.PI);
    rnd.strokeStyle = "#00c5cd";
    rnd.stroke(bubbles);
    rnd.fillStyle = "#eef7fa";
    rnd.fill(bubbles);
}
function gravel(_x, _y) {
    let gravel = new Path2D();
    gravel.arc(_x, _y, 4, 0, 6 * Math.PI);
    rnd.fillStyle = "#565257";
    rnd.fill(gravel);
}
function fish(_x, _y) {
    let body = new Path2D();
    body.ellipse(_x, _y, 15, 30, 1.5, 0, 2 * Math.PI);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(body);
    let tail = new Path2D();
    tail.moveTo(_x - 30, _y + 4);
    tail.lineTo(_x - 50, _y + 10);
    tail.lineTo(_x - 50, _y - 1);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(tail);
    let eye = new Path2D();
    eye.arc(_x + 20, _y - 2, 4, 0, 2 * Math.PI);
    rnd.fillStyle = "#FFFFFF";
    rnd.fill(eye);
    rnd.strokeStyle = "#000000";
    rnd.stroke(eye);
    let innereye = new Path2D();
    innereye.arc(_x + 20, _y - 2, 2, 0, 2 * Math.PI);
    rnd.fillStyle = "#000000";
    rnd.fill(innereye);
}
//# sourceMappingURL=main.js.map