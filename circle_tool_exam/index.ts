function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black");
    stroke("white");
    strokeWeight(3);
    noFill();

    let w = (mouseX-width/2) * 2
    let h = (mouseY-height/2) * 2
    ellipse(width/2, height/2, w, h);

    let a = w/2 * h/2  * Math.PI;

    noStroke();
    fill("white");
    text(`Area = ${abs(a)}`, 10, 190);

}
