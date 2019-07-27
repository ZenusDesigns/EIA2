/*     
Aufgabe:(Endabagbe -  Canvas - TIAABF) 
Name: Daniel Mainberger
Matrikel: (260566)
Datum: (24.07.2019) 
*/

namespace UnderTheSea {


    export class FishsE extends Moving {
        
        constructor() {
            super();
            this.size = 15;
        }

        draw(): void {

   let body: Path2D = new Path2D();
    body.ellipse(this.x, this.y, 15, 25, 1.5, 0, 2 * Math.PI);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(body);
  

    let tail: Path2D = new Path2D();
    tail.moveTo(this.x - 20, this.y + 8);
    tail.lineTo(this.x - 40, this.y + 20);
    tail.lineTo(this.x - 40, this.y - 2);
    rnd.fillStyle = "#c1cdcd";
    rnd.fill(tail);
    

    let eye: Path2D = new Path2D();
    eye.arc(this.x + 15, this.y - 2, 4, 0, 2 * Math.PI);
    rnd.fillStyle = "#FFFFFF";
    rnd.fill(eye);
    rnd.strokeStyle = "#000000";
    rnd.stroke(eye);

    let innereye: Path2D = new Path2D();
    innereye.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
    rnd.fillStyle = "#000000";
    rnd.fill(innereye);
}

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x + 5 > cvs.width + 100) {
                this.x = 0;
        }
    }
}

}