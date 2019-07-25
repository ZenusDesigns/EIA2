var Task_11;
(function (Task_11) {
    class FishsE extends Task_11.Moving {
        constructor() {
            super();
            this.size = 15;
        }
        draw() {
            let body = new Path2D();
            body.ellipse(this.x, this.y, 15, 25, 1.5, 0, 2 * Math.PI);
            Task_11.rnd.fillStyle = "#c1cdcd";
            Task_11.rnd.fill(body);
            let tail = new Path2D();
            tail.moveTo(this.x - 20, this.y + 8);
            tail.lineTo(this.x - 40, this.y + 20);
            tail.lineTo(this.x - 40, this.y - 2);
            Task_11.rnd.fillStyle = "#c1cdcd";
            Task_11.rnd.fill(tail);
            let eye = new Path2D();
            eye.arc(this.x + 15, this.y - 2, 4, 0, 2 * Math.PI);
            Task_11.rnd.fillStyle = "#FFFFFF";
            Task_11.rnd.fill(eye);
            Task_11.rnd.strokeStyle = "#000000";
            Task_11.rnd.stroke(eye);
            let innereye = new Path2D();
            innereye.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
            Task_11.rnd.fillStyle = "#000000";
            Task_11.rnd.fill(innereye);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 5 > Task_11.cvs.width + 100) {
                this.x = 0;
            }
        }
    }
    Task_11.FishsE = FishsE;
})(Task_11 || (Task_11 = {}));
//# sourceMappingURL=FishsE.js.map