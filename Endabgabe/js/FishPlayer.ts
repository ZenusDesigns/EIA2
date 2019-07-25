namespace Task_11 {


    export class FishPlayer {

        size: number = 10;
        dx:number;
        dy:number;
        x: number;
        y: number;
        direction: string = "rechts";

        constructor() {
            this.x = cvs.width / 2;
            this.y = cvs.height / 2;
            this.dx = 0;
            this.dy = 0;

        }

        draw(): void {


            if (this.direction == "rechts") {

                let body: Path2D = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 15) / 15, (this.size * 30) / 15, 1.5, 0, 2 * Math.PI);
                rnd.fillStyle = "#f00";
                rnd.fill(body);


                let tail: Path2D = new Path2D();
                tail.moveTo(this.x - (25 * this.size) /15 , this.y + (2 * this.size) / 15);
                tail.lineTo(this.x - (50 * this.size) /15, this.y + (5* this.size) / 15);
                tail.lineTo(this.x - (50 * this.size) /15, this.y - (1* this.size) / 15);
                rnd.fillStyle = "#f00";
                rnd.fill(tail);


                let eye: Path2D = new Path2D();
                eye.arc(this.x + 15, this.y - 2, 4, 0, 2 * Math.PI);
                rnd.fillStyle = "#2F4F4F";
                rnd.fill(eye);
                rnd.strokeStyle = "#000000";
                rnd.stroke(eye);

                let innereye: Path2D = new Path2D();
                innereye.arc(this.x + 15, this.y - 2, 2, 0, 2 * Math.PI);
                rnd.fillStyle = "#000000";
                rnd.fill(innereye);
            }

            else {

                let body: Path2D = new Path2D();
                body.ellipse(this.x, this.y, (this.size * 15) / 15, (this.size * 30) / 15, 1.5, 0, 2 * Math.PI);
                rnd.fillStyle = "#f00";
                rnd.fill(body);


                let tail: Path2D = new Path2D();
                tail.moveTo(this.x + (25 * this.size) /15 , this.y + (2 * this.size) / 15);
                tail.lineTo(this.x + (50 * this.size) /15, this.y + (5* this.size) / 15);
                tail.lineTo(this.x + (50 * this.size) /15, this.y - (1* this.size) / 15);
                rnd.fillStyle = "#f00";
                rnd.fill(tail);


                let eye: Path2D = new Path2D();
                eye.arc(this.x - 15, this.y - 2, 4, 0, 2 * Math.PI);
                rnd.fillStyle = "#2F4F4F";
                rnd.fill(eye);
                rnd.strokeStyle = "#000000";
                rnd.stroke(eye);

                let innereye: Path2D = new Path2D();
                innereye.arc(this.x - 15, this.y - 2, 2, 0, 2 * Math.PI);
                rnd.fillStyle = "#000000";
                rnd.fill(innereye);

            }
        }

        kanibalism(fish: Moving): boolean {
            if (Math.sqrt(Math.pow(Math.abs(this.x - fish.x), 2) + Math.pow(Math.abs(this.y - fish.y), 2)) < 50 && fish.size > 0) {
                if (this.size > fish.size) {
                    this.size++;
                    highscore += 100;
                    return true;
                    
                }
                else {
                    alert("U DEAD");
                    return false;
                }
            }
            else return false;


        }


        move(): void {
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

        update(): void {
            this.draw();
        }
    }
}