/*
Aufgabe:(Endabagbe -  Canvas - TIAABF)
Name: Daniel Mainberger
Matrikel: (260566)
Datum: (24.07.2019)
*/
var UnderTheSea;
(function (UnderTheSea) {
    class FishPlayer {
        constructor() {
            this.size = 10;
            this.direction = "rechts";
            this.x = UnderTheSea.cvs.width / 2;
            this.y = UnderTheSea.cvs.height / 2;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            if (this.direction == "rechts") {
                let body = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 15) / 15, (this.size * 30) / 15, 1.5, 0, 2 * Math.PI);
                UnderTheSea.rnd.fillStyle = "#f00";
                UnderTheSea.rnd.fill(body);
                let tail = new Path2D();
                tail.moveTo(this.x - (25 * this.size) / 15, this.y + (2 * this.size) / 15);
                tail.lineTo(this.x - (50 * this.size) / 15, this.y + (5 * this.size) / 15);
                tail.lineTo(this.x - (50 * this.size) / 15, this.y - (1 * this.size) / 15);
                UnderTheSea.rnd.fillStyle = "#f00";
                UnderTheSea.rnd.fill(tail);
                let eye = new Path2D();
                eye.arc(this.x + 15, this.y - 2, 4, 0, 2 * Math.PI);
                UnderTheSea.rnd.fillStyle = "#2F4F4F";
                UnderTheSea.rnd.fill(eye);
                UnderTheSea.rnd.strokeStyle = "#000000";
                UnderTheSea.rnd.stroke(eye);
                let innereye = new Path2D();
                innereye.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
                UnderTheSea.rnd.fillStyle = "#000000";
                UnderTheSea.rnd.fill(innereye);
            }
            else {
                let body = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 15) / 15, (this.size * 30) / 15, 1.5, 0, 2 * Math.PI);
                UnderTheSea.rnd.fillStyle = "#f00";
                UnderTheSea.rnd.fill(body);
                let tail = new Path2D();
                tail.moveTo(this.x + (25 * this.size) / 15, this.y + (2 * this.size) / 15);
                tail.lineTo(this.x + (50 * this.size) / 15, this.y + (5 * this.size) / 15);
                tail.lineTo(this.x + (50 * this.size) / 15, this.y - (1 * this.size) / 15);
                UnderTheSea.rnd.fillStyle = "#f00";
                UnderTheSea.rnd.fill(tail);
                let eye = new Path2D();
                eye.arc(this.x - 15, this.y - 2, 4, 0, 2 * Math.PI);
                UnderTheSea.rnd.fillStyle = "#2F4F4F";
                UnderTheSea.rnd.fill(eye);
                UnderTheSea.rnd.strokeStyle = "#000000";
                UnderTheSea.rnd.stroke(eye);
                let innereye = new Path2D();
                innereye.arc(this.x - 15, this.y - 2, 2, 0, 2 * Math.PI);
                UnderTheSea.rnd.fillStyle = "#000000";
                UnderTheSea.rnd.fill(innereye);
            }
        }
        kanibalism(fish) {
            let xDistance = Math.abs(this.x - fish.x);
            let yDistance = Math.abs(this.y - fish.y);
            if (Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)) < 50) {
                if (this.size > fish.size) {
                    this.size++;
                    UnderTheSea.highscore += 100;
                    return "dead";
                }
                else {
                    alert("U DEAD");
                    return "gameover";
                }
            }
            else
                return "nothing";
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        update() {
            this.draw();
        }
    }
    UnderTheSea.FishPlayer = FishPlayer;
})(UnderTheSea || (UnderTheSea = {}));
//# sourceMappingURL=FishPlayer.js.map