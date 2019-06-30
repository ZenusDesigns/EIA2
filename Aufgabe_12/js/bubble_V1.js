var Task_12;
(function (Task_12) {
    class bubblesV1 {
        draw() {
            let bubbles = new Path2D();
            bubbles.arc(this._x, this._y, 20, 0, 8 * Math.PI);
            Task_12.rnd.strokeStyle = "#00c5cd";
            Task_12.rnd.stroke(bubbles);
            Task_12.rnd.fillStyle = "#eef7fa";
            Task_12.rnd.fill(bubbles);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this._y += this.dy;
            if (this._y < 0)
                this._y = Task_12.cvs.height;
        }
    }
    Task_12.bubblesV1 = bubblesV1;
})(Task_12 || (Task_12 = {}));
//# sourceMappingURL=bubble_V1.js.map