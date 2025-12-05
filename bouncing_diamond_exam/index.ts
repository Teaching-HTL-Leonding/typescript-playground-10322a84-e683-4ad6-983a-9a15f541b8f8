function setup() {
    createCanvas(300, 300);
}

let directionX = 1
let directionY = 1

let diamondCenterX = 150
let diamondCenterY = 0


function draw() {
    background("gold");
    stroke("white")
    strokeWeight(3)
    noFill()


    line(diamondCenterX, diamondCenterY, diamondCenterX + 75, diamondCenterY + 75)
    line(diamondCenterX, diamondCenterY, diamondCenterX - 75, diamondCenterY + 75)
    line(diamondCenterX - 75, diamondCenterY + 75, diamondCenterX, diamondCenterY + 150)
    line(diamondCenterX, diamondCenterY + 150, diamondCenterX + 75, diamondCenterY + 75)

    diamondCenterX += directionX;
    diamondCenterY += directionY;

    if (diamondCenterX >= width || diamondCenterX <= 0) {
        directionX *= -1;
    }

    if (diamondCenterY >= height || diamondCenterY <= 0) {
        directionY *= -1;
    }


}


