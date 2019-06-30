namespace Task_12 {
    export class food extends aquarium {

        draw(): void {
            let snack: Path2D = new Path2D();
            rnd.strokeStyle = "#f9e4b7";
            rnd.fillStyle = "#f9e4b7";
            rnd.fill(snack); 
            rnd.stroke(snack);
        }

        move(): void {
            this._x += this._dx;
            this._y += this._dy;
            if (this._y > 400) {
                this._y = 450;
                this._x = this._x -= this._dx;
            }
        }
    }
}

