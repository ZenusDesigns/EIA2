/*
Aufgabe:(Endabagbe -  Canvas - TIAABF)
Name: Daniel Mainberger
Matrikel: (260566)
Datum: (24.07.2019)
*/
var UnderTheSea;
(function (UnderTheSea) {
    class FishsB extends UnderTheSea.Moving {
        constructor() {
            super();
            this.size = 5;
        }
        draw() {
            let body = new Path2D();
            body.ellipse(this.x, this.y, 8, 15, 1.5, 0, 2 * Math.PI);
            UnderTheSea.rnd.fillStyle = "#2F4F4F";
            UnderTheSea.rnd.fill(body);
            let tail = new Path2D();
            tail.moveTo(this.x - 15, this.y + 4);
            tail.lineTo(this.x - 20, this.y + 10);
            tail.lineTo(this.x - 20, this.y - 1);
            UnderTheSea.rnd.fillStyle = "#2F4F4F";
            UnderTheSea.rnd.fill(tail);
            let eye = new Path2D();
            eye.arc(this.x + 10, this.y - 2, 4, 0, 2 * Math.PI);
            UnderTheSea.rnd.fillStyle = "#2F4F4F";
            UnderTheSea.rnd.fill(eye);
            UnderTheSea.rnd.strokeStyle = "#000000";
            UnderTheSea.rnd.stroke(eye);
            let innereye = new Path2D();
            innereye.arc(this.x + 10, this.y - 2, 2, 0, 2 * Math.PI);
            UnderTheSea.rnd.fillStyle = "#000000";
            UnderTheSea.rnd.fill(innereye);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 30 > UnderTheSea.cvs.width + 100) {
                this.x = 0;
            }
        }
    }
    UnderTheSea.FishsB = FishsB;
})(UnderTheSea || (UnderTheSea = {}));
//# sourceMappingURL=FishsB.js.map