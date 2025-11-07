function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black");
    noFill();
    stroke("white");
    strokeWeight(3);


    rectMode(CENTER);
    let w = (width / 2 - mouseX) * 2
    let h = (height / 2 - mouseY) * 2


    //Fläche
    let a = w * h
    noStroke();
    fill("white");
    text(`Area = ${abs(a)}`, width - 390, height);


    //Diagonalen
    stroke("grey")
    line(mouseX, mouseY, mouseX + w, mouseY + h)
    line(mouseX, mouseY + h, mouseX + w, mouseY)


    //Farben
    stroke("yellow")
    line(mouseX, mouseY + h, mouseX + w, mouseY + h)
    stroke("aqua")
    line(mouseX + w, mouseY + h, mouseX + w, mouseY)
    stroke("green")
    line(mouseX + w, mouseY, mouseX, mouseY)
    stroke("red")
    line(mouseX, mouseY, mouseX, mouseY + h)

    //Länge und Breite des Rechtecks
    fill("white")
    stroke("black")
    let x = w
    let y = h
    text(`${abs(x)}`, width / 2 - w / 2 - 25, height / 4 - 5);
    text(`${abs(y)}`, width / 2, height / 2 - h / 2 - 5);

}