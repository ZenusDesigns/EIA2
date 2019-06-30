var Task_12;
(function (Task_12) {
    class fishsB {
        draw() {
            let body = new Path2D();
            body.ellipse(this._x, this._y, 15, 30, 1.5, 0, 2 * Math.PI);
            Task_12.rnd.fillStyle = "#2F4F4F";
            Task_12.rnd.fill(body);
            let tail = new Path2D();
            tail.moveTo(this._x - 30, this._y + 4);
            tail.lineTo(this._x - 50, this._y + 10);
            tail.lineTo(this._x - 50, this._y - 1);
            Task_12.rnd.fillStyle = "#2F4F4F";
            Task_12.rnd.fill(tail);
            let eye = new Path2D();
            eye.arc(this._x + 20, this._y - 2, 4, 0, 2 * Math.PI);
            Task_12.rnd.fillStyle = "#2F4F4F";
            Task_12.rnd.fill(eye);
            Task_12.rnd.strokeStyle = "#000000";
            Task_12.rnd.stroke(eye);
            let innereye = new Path2D();
            innereye.arc(this._x + 20, this._y - 2, 2, 0, 2 * Math.PI);
            Task_12.rnd.fillStyle = "#000000";
            Task_12.rnd.fill(innereye);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this._x += this.dx;
            if (this._x + 50 > Task_12.cvs.width + 100) {
                this._x = 0;
            }
        }
    }
    Task_12.fishsB = fishsB;
})(Task_12 || (Task_12 = {}));
//# sourceMappingURL=fish_B.js.map