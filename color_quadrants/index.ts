function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("yellow")
    rect(0, 0, width / 2, height / 2)
    fill("green")
    rect(width / 2, 0, width / 2, height / 2)
    fill("blue")
    rect(0, height / 2, width / 2, height / 2)
    fill("red")
    rect(width / 2, height / 2, width / 2, height / 2)

    rectMode(CENTER)
    fill("black")
    rect(width / 2, height / 2, 170, 50)
}

function mouseClicked() {
    fill("black")
    rect(width / 2, height / 2, 170, 50)

    noStroke()
    fill("white")
    textSize(30)
    textStyle(BOLD)
    textAlign(CENTER, CENTER)

    let message: string

    if (mouseX < width / 2) {
        //Linke Hälfte

        if (mouseY < height / 2) {
            //Obere Hälfte
            message = "Yellow"
        } else {
            //Untere Hälfte
            message = "Blue"
        }

    }

    if (mouseX > width / 2) {
        //Linke Hälfte

        if (mouseY < height / 2) {
            //Obere Hälfte
            message = "Green"
        } else {
            //Untere Hälfte
            message = "Red"
        }

    }













    text(message, width / 2, height / 2)
}
