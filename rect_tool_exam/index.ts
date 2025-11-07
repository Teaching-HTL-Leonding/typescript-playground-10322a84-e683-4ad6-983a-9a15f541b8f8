function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black");
    noFill();
    stroke("white")
    strokeWeight(3)

    rectMode(CENTER)
    let w = (width/2 - mouseX) * 2
    let h = (height/2 - mouseY) * 2
    rect(width/2, height/2, w, h)

    
    text(`Area=${x}`)
}
