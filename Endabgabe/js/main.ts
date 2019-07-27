namespace Task_11 {

    document.addEventListener("DOMContentLoaded", init);
    export let rnd: CanvasRenderingContext2D;
    export let cvs: HTMLCanvasElement;
    let arrayAll: Moving[] = [];
    let fishPlayer: FishPlayer;
    export let highscore: number = 0;
    export let inputPlayerName: string;
    let fps: number = 30;
    let img: ImageData;


    function init(): void {
        cvs = document.getElementsByTagName("canvas")[0];
        rnd = cvs.getContext("2d");

    

        drawWorld();

        img = rnd.getImageData(0, 0, cvs.width, cvs.height);

        fishPlayer = new FishPlayer();
        fishPlayer.draw();

        document.addEventListener("keydown", movementPlayer);




        for (let i: number = 0; i <= 10; i++) {
            let x: number = Math.random() * cvs.width + 650;
            let y: number = Math.random() * cvs.height ;
            let dx: number = Math.random() * 15;
            let fishE: FishsE;
            fishE = new FishsE();
            fishE.x = x;
            fishE.y = y;
            fishE.dx = dx;
            arrayAll.push(fishE);
            fishE.draw();
        }

        for (let i: number = 0; i <= 5; i++) {
            let x: number = Math.random() * cvs.width;
            let y: number = Math.random() * cvs.height ;
            let dx: number = Math.random() * 20 ;
            let fishB: FishsB;
            fishB = new FishsB();
            fishB.x = x;
            fishB.y = y;
            fishB.dx = dx;
            arrayAll.push(fishB);
            fishB.draw();
        }



       /* for (let i: number = 0; i <= 50; i++) {
            let x: number = Math.random() * cvs.width;
            let y: number = Math.random() * cvs.height;
            let dy: number = Math.random() * -2 - 1;
            let bubbleV2: Bubbles2;
            bubbleV2 = new Bubbles2();
            bubbleV2.x = x;
            bubbleV2.y = y;
            bubbleV2.dy = dy;
            arrayAll.push(bubbleV2);
            bubbleV2.draw();
        }*/
        update();
    }

    function deleteObject(object: Moving) {
        for (let i: number = 0; i < arrayAll.length; i++) {
            if (arrayAll[i] == object) {
                arrayAll.splice(i, 1);
            }
        }
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        rnd.clearRect(0, 0, cvs.width, cvs.height);
        rnd.putImageData(img, 0, 0);

        fishPlayer.update();

        for (let i: number = 0; i < arrayAll.length; i++) {
            arrayAll[i].update();
            if(fishPlayer.kanibalism(arrayAll[i]) == "dead") {
                deleteObject(arrayAll[i]);
            } else if(fishPlayer.kanibalism(arrayAll[i]) == "gameover") {
                arrayAll.splice(0, arrayAll.length);
                inputPlayerName = prompt("Your score: " + highscore, "Your Name" );
                insert();
                refresh();  
            }
        }
        
        rnd.fillStyle = "black";
		rnd.font = "20px Arial";
		rnd.fillText("Points: " + highscore.toString(), 950, 40);
    }


    function movementPlayer(e: KeyboardEvent): void {

        if (e.keyCode == 37) {
            fishPlayer.x -= 20;
            fishPlayer.direction = "links";
        }

        else if (e.keyCode == 38) {
            fishPlayer.y -= 20;
        }
        else if (e.keyCode == 39) {
            fishPlayer.x += 20;
            fishPlayer.direction = "rechts";
        }
        else if (e.keyCode == 40) {
            fishPlayer.y += 20;
        }






    }

    function drawWorld(): void {

        let water: CanvasGradient = rnd.createLinearGradient(0, 50, 0, 400);
        water.addColorStop(0, "#eef7fa");
        water.addColorStop(1, "#add8e6");
        rnd.fillStyle = water;
        rnd.fillRect(0, 0, cvs.width, cvs.height);


        let ground: Path2D = new Path2D();
        ground.rect(0, 400, 1080, 400);
        rnd.fillStyle = "#c2b280";
        rnd.fill(ground);


        for (let i: number = 0; i < 1000; i++) {
            let _x: number = Math.random() * cvs.width;
            let _y: number = Math.random() * 600 + 400;
            let gravel: Path2D = new Path2D();
            gravel.arc(_x, _y, 4, 0, 6 * Math.PI);
            rnd.fillStyle = "#565257";
            rnd.fill(gravel);
        }

        for (let i: number = 0; i < 150; i++) {
            let grass: Path2D = new Path2D();
            let _x: number = Math.random() * cvs.width;
            let _y: number = Math.random() * cvs.height + 350;
            grass.moveTo(_x + 10, _y + 100);
            grass.lineTo(_x + 30, _y - 10);
            grass.lineTo(_x + 30, _y - 100);
            grass.closePath();
            rnd.fillStyle = "#002300";
            rnd.fill(grass);
            rnd.strokeStyle = "#002300";
            rnd.stroke(grass);
        }





    }
}