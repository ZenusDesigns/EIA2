namespace Task_12 {


    export class fishsE {
        _x: number;
        _y: number;
        dx: number;

        draw(): void {

   let body: Path2D = new Path2D();
    body.ellipse(this._x, this._y, 15, 30, 1.5, 0, 2 * Math.PI);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(body);
  

    let tail: Path2D = new Path2D();
    tail.moveTo(this._x - 30, this._y + 4);
    tail.lineTo(this._x - 50, this._y + 10);
    tail.lineTo(this._x - 50, this._y - 1);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(tail);
    

    let eye: Path2D = new Path2D();
    eye.arc(this._x + 20, this._y - 2, 4, 0, 2 * Math.PI);
    rnd.fillStyle = "#FFFFFF";
    rnd.fill(eye);
    rnd.strokeStyle = "#000000";
    rnd.stroke(eye);

    let innereye: Path2D = new Path2D();
    innereye.arc(this._x + 20, this._y - 2, 2, 0, 2 * Math.PI);
    rnd.fillStyle = "#000000";
    rnd.fill(innereye);
}

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this._x += this.dx;
            if (this._x + 50 > cvs.width + 100) {
                this._x = 0;
            }
        }
    }
}
