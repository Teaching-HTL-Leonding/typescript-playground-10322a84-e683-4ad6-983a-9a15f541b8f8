const MARGIN_NUM = 10;

let num: string = "";          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");
    stroke("black")

    fill("white")
    noStroke()
    rect(MARGIN_NUM, MARGIN_NUM, width - 2 * MARGIN_NUM, lineHeight - 2 * MARGIN_NUM)

    stroke("black")
    for (let i = 0; i < 6; i++) {
        line(i, lineHeight * i, width, lineHeight * i)
    }

    line(cellWidth * 2, lineHeight, cellWidth * 2, height)
    line(cellWidth, lineHeight, cellWidth, lineHeight * 4)







    fill("black")
    textAlign(CENTER, CENTER)
    textSize(50)
    text(`0`, cellWidth, lineHeight * 4.5)
    text(`C`, cellWidth * 2.5, lineHeight * 4.5)
    text(`1`, cellWidth * 0.5, lineHeight * 3.5)
    text(`2`, cellWidth * 1.5, lineHeight * 3.5)
    text(`3`, cellWidth * 2.5, lineHeight * 3.5)
    text(`4`, cellWidth * 0.5, lineHeight * 2.5)
    text(`5`, cellWidth * 1.5, lineHeight * 2.5)
    text(`6`, cellWidth * 2.5, lineHeight * 2.5)
    text(`7`, cellWidth * 0.5, lineHeight * 1.5)
    text(`8`, cellWidth * 1.5, lineHeight * 1.5)
    text(`9`, cellWidth * 2.5, lineHeight * 1.5)


    //Zahleingabe
    fill("black")
    textSize(50)
    textAlign(RIGHT, CENTER)
    text(num, width - 20, lineHeight / 2)

}





function mouseClicked() {
    const x = floor(mouseX / cellWidth)
    const y = floor(mouseY / lineHeight)

    if (y === 1) {
        if (x === 0) {
            num += 7
        }

        else if (x === 1) {
            num += 8
        }

        else if (x === 2) {
            num += 9
        }
    }

    if (y === 2) {
        if (x === 0) {
            num += 4
        }

        else if (x === 1) {
            num += 5
        }

        else if (x === 2) {
            num += 6
        }
    }

    if (y === 3) {
        if (x === 0) {
            num += 1
        }

        else if (x === 1) {
            num += 2
        }

        else if (x === 2) {
            num += 3
        }
    }

    if (y === 4) {
        if (x === 0 || x === 1) {
            num += 0
        }

        else if (x === 2) {
            num = ""
        }
    }
}