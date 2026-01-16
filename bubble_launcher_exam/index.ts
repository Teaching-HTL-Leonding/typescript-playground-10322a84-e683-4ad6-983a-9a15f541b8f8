let circleX: number = 0;
let circleY: number = 150;
let direction: number = 1;

//Ball
let speed = [2]
let ball = [0]

//Zeilen Y Achse
let rows = [360, 320, 280, 240, 220, 180, 140, 100, 60, 20]

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(400, 300);
    let ball: number = (random(20, 360))
}

function draw() {
    background("white");

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);

    fill('yellow');
    stroke('gold');

    circle(circleX, circleY, DIAM);

    circleX += SPEED * direction;
    if (circleX - RADI < 0 || circleX + RADI > width) {
        direction *= -1;
        circleX = max(RADI, min(width - RADI, circleX));
    }



    //Ball zeichnen
    for(let i = 0; i < ball.length; i++) {
        circle(ball[i], rows[i % rows.length], DIAM)

        ball[i] += speed[i]
        if (ball[i] <= 0 || ball[i] >= width) {
            speed[i] *= -1
        }
    }

    
}

function mouseClicked() {
    if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        ball.push(random(0, 360))
        speed.push(2)
    }
    
}
