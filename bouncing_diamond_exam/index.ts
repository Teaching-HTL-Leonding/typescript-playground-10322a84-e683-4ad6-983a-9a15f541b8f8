function setup() {
    createCanvas(300, 300);
}

let directionX = 3
let directionY = 3

let diamondCenterX = 150
let diamondCenterY = 0

let countdown = 10


function draw() {
    background("gold");
    stroke("white")
    strokeWeight(3)
    noFill()


    line(diamondCenterX, diamondCenterY, diamondCenterX + 50, diamondCenterY + 50)
    line(diamondCenterX, diamondCenterY, diamondCenterX - 50, diamondCenterY + 50)
    line(diamondCenterX - 50, diamondCenterY + 50, diamondCenterX, diamondCenterY + 100)
    line(diamondCenterX, diamondCenterY + 100, diamondCenterX + 50, diamondCenterY + 50)

    diamondCenterX += directionX;
    diamondCenterY += directionY;

    if (diamondCenterX >= width || diamondCenterX <= 0) {
        directionX *= -1;
        countdown += -1
    }

    if (diamondCenterY >= height || diamondCenterY <= 0) {
        directionY *= -1;
        countdown += -1

    }

    if (countdown === 0) {
        directionX = 0
        directionY = 0
    }


    //Text
    noStroke();
    fill("black");
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(countdown, diamondCenterX, diamondCenterY + 50)
}