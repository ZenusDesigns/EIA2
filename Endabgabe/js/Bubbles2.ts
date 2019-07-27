namespace UnderTheSea {
	export class Bubbles2 extends Moving {


        constructor() {
            super();
        }

		draw(): void {
	let bubbles: Path2D = new Path2D();
    bubbles.arc(this.x, this.y, 15, 0, 2 * Math.PI);
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
			this.y += this.dy;
			if (this.y < 0)
				this.y = cvs.height;
		}
	}
}