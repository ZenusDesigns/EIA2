var UnderTheSea;
(function (UnderTheSea) {
    class Bubbles2 extends UnderTheSea.Moving {
        constructor() {
            super();
        }
        draw() {
            let bubbles = new Path2D();
            bubbles.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            UnderTheSea.rnd.strokeStyle = "#00c5cd";
            UnderTheSea.rnd.stroke(bubbles);
            UnderTheSea.rnd.fillStyle = "#eef7fa";
            UnderTheSea.rnd.fill(bubbles);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = UnderTheSea.cvs.height;
        }
    }
    UnderTheSea.Bubbles2 = Bubbles2;
})(UnderTheSea || (UnderTheSea = {}));
//# sourceMappingURL=Bubbles2.js.map