function setup() {
    createCanvas(500, 500);
    background("black");
    stroke("white");
    strokeWeight(3);
    noFill();
}

let lastClickX: number = 0;
let lastClickY: number = 0;

function mouseClicked() {
    let a = mouseY - lastClickY;
    let b = mouseX - lastClickX;
    let c = sqrt(a * a + b * b)
    let diameter = 2 * c
    circle(mouseX, mouseY, diameter);

    line(mouseX, mouseY, lastClickX, lastClickY)
    line(mouseX, mouseY, lastClickX, mouseY)
    line(lastClickX, mouseY, lastClickX, lastClickY)



    lastClickX = mouseX
    lastClickY = mouseY
}
