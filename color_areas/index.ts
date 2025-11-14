function setup() {
    createCanvas(400, 200);
    background("black")
    noStroke();

    fill("green")
    rect(0, 0, width / 3, height)

    fill("white")
    rect(width/3, 0, width/3, height)

    fill("red")
    rect(width/3 * 2, 0, width/3, height)

    fill("black")
    rect(0, height - 50, width, 50)
}

const textAreaHeight: number = 50

function mouseClicked() {
    fill("black")
    rect(0, height - 50, width, 50)

    noStroke()
    fill("white")
    textSize(30)
    textAlign(CENTER, CENTER)

    let message: string
    if (mouseX < width/3) {
        message = "green"
    }

    else if (mouseX < width/3 * 2) {
        message = "white"
    }

    else if (mouseX < width) {
        message= "red"
    }




    text(message, width / 2, height - textAreaHeight / 2);
}
