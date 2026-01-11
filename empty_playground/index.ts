let ballX = 0
let speed = 2

//Zeilen Y Achse
let rows = [360, 320, 280, 240, 200, 160, 120, 80, 40]
let currentRow = 0



//Button
let buttonsize = 50
let buttonX
let buttonY


function setup() {
    createCanvas(600, 400)
    buttonX = width - 10 - buttonsize
    buttonY = height - 10 - buttonsize
}

function draw() {
    background("magenta")

    //Ball zeichnen
    fill("lightblue")
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

    line(buttonX + buttonsize/2, buttonY + 10,
        buttonX + buttonsize/2, buttonY + buttonsize - 10)

    line(buttonX + 10, buttonY + buttonsize/2,
        buttonX + buttonsize - 10, buttonY + buttonsize/2)
}

function mouseClicked () {
    if (mouseX > buttonX && mouseX < buttonX + buttonsize
        && mouseY > buttonY && mouseY < buttonY + buttonsize) {

            currentRow ++
            
            if (currentRow > rows.length - 1) {
                currentRow = 0
            }


        }
}