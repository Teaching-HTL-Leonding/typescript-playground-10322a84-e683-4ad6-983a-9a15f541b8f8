function setup() {
    createCanvas(300, 300);
    rectMode(CENTER);
}

let directionX = 1
let directionY = 1

function draw() {
    background("gold");
    stroke("white")
    strokeWeight(3)
    noFill()

    line(width/2, height/height, width/4 * 3, height/4)
    line(width/2, height/height, width/4, height/4)
    line(width/4, height/4, width/2, height/2)
    line(width/2, height/2, width/4 * 3, height/4)


}
