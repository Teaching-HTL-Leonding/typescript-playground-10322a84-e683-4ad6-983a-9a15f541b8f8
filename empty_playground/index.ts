function setup() {
    createCanvas(500,500)
    background("black")
    colorMode(HSB)
}

let x: number = 0
let colorHue: number = 0

function draw() {
    background("black")
    noStroke()
    fill(colorHue, 100, 100)
    colorHue = (colorHue+1) % 360
    circle(x, x, x)
    x = x + 1
    x = x % 500
}
