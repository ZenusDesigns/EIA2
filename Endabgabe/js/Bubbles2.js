var Task_11;
(function (Task_11) {
    class Bubbles2 extends Task_11.Moving {
        constructor() {
            super();
        }
        draw() {
            let bubbles = new Path2D();
            bubbles.arc(this.x, this.y, 15, 0, 2 * Math.PI);
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
            this.y += this.dy;
            if (this.y < 0)
                this.y = Task_11.cvs.height;
        }
    }
    Task_11.Bubbles2 = Bubbles2;
})(Task_11 || (Task_11 = {}));
//# sourceMappingURL=Bubbles2.js.map