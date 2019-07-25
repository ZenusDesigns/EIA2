var Task_11;
(function (Task_11) {
    class FishPlayer {
        constructor() {
            this.size = 10;
            this.direction = "rechts";
            this.x = Task_11.cvs.width / 2;
            this.y = Task_11.cvs.height / 2;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            if (this.direction == "rechts") {
                let body = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 15) / 15, (this.size * 30) / 15, 1.5, 0, 2 * Math.PI);
                Task_11.rnd.fillStyle = "#f00";
                Task_11.rnd.fill(body);
                let tail = new Path2D();
                tail.moveTo(this.x - (25 * this.size) / 15, this.y + (2 * this.size) / 15);
                tail.lineTo(this.x - (50 * this.size) / 15, this.y + (5 * this.size) / 15);
                tail.lineTo(this.x - (50 * this.size) / 15, this.y - (1 * this.size) / 15);
                Task_11.rnd.fillStyle = "#f00";
                Task_11.rnd.fill(tail);
                let eye = new Path2D();
                eye.arc(this.x + 15, this.y - 2, 4, 0, 2 * Math.PI);
                Task_11.rnd.fillStyle = "#2F4F4F";
                Task_11.rnd.fill(eye);
                Task_11.rnd.strokeStyle = "#000000";
                Task_11.rnd.stroke(eye);
                let innereye = new Path2D();
                innereye.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
                Task_11.rnd.fillStyle = "#000000";
                Task_11.rnd.fill(innereye);
            }
            else {
                let body = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 15) / 15, (this.size * 30) / 15, 1.5, 0, 2 * Math.PI);
                Task_11.rnd.fillStyle = "#f00";
                Task_11.rnd.fill(body);
                let tail = new Path2D();
                tail.moveTo(this.x + (25 * this.size) / 15, this.y + (2 * this.size) / 15);
                tail.lineTo(this.x + (50 * this.size) / 15, this.y + (5 * this.size) / 15);
                tail.lineTo(this.x + (50 * this.size) / 15, this.y - (1 * this.size) / 15);
                Task_11.rnd.fillStyle = "#f00";
                Task_11.rnd.fill(tail);
                let eye = new Path2D();
                eye.arc(this.x - 15, this.y - 2, 4, 0, 2 * Math.PI);
                Task_11.rnd.fillStyle = "#2F4F4F";
                Task_11.rnd.fill(eye);
                Task_11.rnd.strokeStyle = "#000000";
                Task_11.rnd.stroke(eye);
                let innereye = new Path2D();
                innereye.arc(this.x - 15, this.y - 2, 2, 0, 2 * Math.PI);
                Task_11.rnd.fillStyle = "#000000";
                Task_11.rnd.fill(innereye);
            }
        }
        kanibalism(fish) {
            if (Math.sqrt(Math.pow(Math.abs(this.x - fish.x), 2) + Math.pow(Math.abs(this.y - fish.y), 2)) < 50 && fish.size > 0) {
                if (this.size > fish.size) {
                    this.size++;
                    Task_11.highscore += 100;
                    return true;
                }
                else {
                    alert("U DEAD");
                    return false;
                }
            }
            else
                return false;
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            //*
            //if (this.x > cvs.width) {
            //    this.x = cvs.width;
            // }
            //else if (this.x > 0) {
            //     this.x = 0;
            // }
            //else if (this.y > cvs.width) {
            // this.y = cvs.width;
            //}
            //else if (this.y > 0) {
            //    this.y = 0;
            // }
        }
        update() {
            this.draw();
        }
    }
    Task_11.FishPlayer = FishPlayer;
})(Task_11 || (Task_11 = {}));
//# sourceMappingURL=FishPlayer.js.map