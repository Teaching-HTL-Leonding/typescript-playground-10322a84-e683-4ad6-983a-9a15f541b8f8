function setup() {
    createCanvas(300, 300);
    rectMode(CENTER);
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



}


