var Task_11;
(function (Task_11) {
    class bubblesV1 {
        draw() {
            let bubbles = new Path2D();
            bubbles.arc(this._x, this._y, 20, 0, 8 * Math.PI);
            Task_11.rnd.strokeStyle = "#00c5cd";
            Task_11.rnd.stroke(bubbles);
            Task_11.rnd.fillStyle = "#eef7fa";
            Task_11.rnd.fill(bubbles);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this._y += this.dy;
            if (this._y < 0)
                this._y = Task_11.cvs.height;
        }
    }
    Task_11.bubblesV1 = bubblesV1;
})(Task_11 || (Task_11 = {}));
//# sourceMappingURL=bubble_V1.js.map