namespace Task_12 {
	export class bubblesV1 {
		_x: number;
		_y: number;
		dy: number;

		draw(): void {
	let bubbles: Path2D = new Path2D();
    bubbles.arc(this._x, this._y, 20, 0, 8 * Math.PI);
    rnd.strokeStyle = "#00c5cd";
    rnd.stroke(bubbles);
    rnd.fillStyle = "#eef7fa";
    rnd.fill(bubbles);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this._y += this.dy;
			if (this._y < 0)
				this._y = cvs.height;
		}
	}
}