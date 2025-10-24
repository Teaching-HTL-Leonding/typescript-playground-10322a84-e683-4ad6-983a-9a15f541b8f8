function setup() {
    createCanvas(1000, 1000)
    colorMode(HSB)
    background(0, 100, 0)
    noStroke();
}

let color_hue: number = 0

function mouseMoved() {
    fill(color_hue, 100, 100);
    circle(mouseX, mouseY, 100)
    color_hue = color_hue + 5
    color_hue = color_hue % 360
    
}