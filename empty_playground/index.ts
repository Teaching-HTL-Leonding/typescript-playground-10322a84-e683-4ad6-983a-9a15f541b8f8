let ballX = 0
let speed = 2

//Zeilen Y Achse
let rows = [360, 320, 280, 240, 200, 160, 120, 80, 40]
let currentRow = 0



//Button
let buttonsize = 50
let buttonX
let buttonY

let buttonX2
let buttonY2


function setup() {
    createCanvas(600, 400)
    buttonX = width - 10 - buttonsize
    buttonY = height - 10 - buttonsize

    buttonX2 = buttonX - 10 - buttonsize
    buttonY2 = buttonY
}

function draw() {
    background("aqua")

    //Ball zeichnen
    fill("white")
    stroke("white")
    strokeWeight(2)
    circle(ballX, rows[currentRow], 50)

    //Ball bewegen
    ballX += speed
    if (ballX > width) {
        ballX = 0
    }

    //Linien anzeigen
    stroke("grey")
    for (let i = 0; i < rows.length; i++) {
        line(0, rows[i], width, rows[i])
    }

    //Button zeichnen
    fill("white")
    stroke("darkgreen")

    rect(buttonX, buttonY, buttonsize, buttonsize)

    line(buttonX + buttonsize / 2, buttonY + 10,
        buttonX + buttonsize / 2, buttonY + buttonsize - 10)

    line(buttonX + 10, buttonY + buttonsize / 2,
        buttonX + buttonsize - 10, buttonY + buttonsize / 2)

    //Minus Button
    rect(buttonX2, buttonY2, buttonsize, buttonsize)

    line(buttonX2 + 10, buttonY2 + buttonsize / 2,
        buttonX2 + buttonsize - 10, buttonY2 + buttonsize / 2)

}

function mouseClicked() {
    if (mouseX > buttonX && mouseX < buttonX + buttonsize
        && mouseY > buttonY && mouseY < buttonY + buttonsize) {
        currentRow++
        if (currentRow > rows.length - 1) {
            currentRow = 0
        }
    }

    
        if (mouseX > buttonX2 && mouseX < buttonX2 + buttonsize
            && mouseY > buttonY2 && mouseY < buttonY2 + buttonsize) {

            currentRow--
            if (currentRow < 0) {
                currentRow = rows.length - 1
            }
        }

}