// // Layout constants
// const GROUPS_PER_ROW = 10;
// const ROWS = 10;
// const MARKS_PER_GROUP = 5;
// const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500

// const GROUP_W = 42;   // width of one tally group
// const GROUP_H = 36;   // height of the vertical strokes
// const COL_GAP = 10;   // gap between groups
// const ROW_GAP = 16;   // gap between rows
// const MARGIN = 16;
// const TITLE_HEIGHT = 30;

// const CELL_W = GROUP_W + COL_GAP;
// const CELL_H = GROUP_H + ROW_GAP;

// // Colors
// const COLOR_FILLED = "steelblue";

// // The random number to visualize (0–500)
// let randomNumber: number;

// // <<< Add your functions here

// function setup(): void {
//     const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN;
//     const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN;
//     createCanvas(canvasW, canvasH);

//     randomNumber = Math.floor(Math.random() * (TOTAL + 1));

//     background("white");

//     // <<< Add your logic here
// }




let n

function setup() {
    createCanvas(500, 500)
    background("white")

    n = floor(random(501))
    textAlign(CENTER)
    textSize(25)
    text(`Random number: ${n} / 500`, width / 2, 30)

    //Striche
    translate(50, 80)
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {

            let filled = shouldFilled(row, col, n)
            drawSticks(filled)
            translate(40, 0)

        }
        translate(-400, 40)
    }
}

function shouldFilled(row: number, col: number, n: number) {
    let index = (row * 10 + col) / 5

    if (index < n) {
        return true
    } else {
        return false
    }
}

function drawSticks(filled: boolean) {
    strokeWeight(2)
    if (filled) {
        stroke("steelblue")
    } else {
        stroke("lightgrey")
    }





        line(0, 5, 0, 35)
        line(5, 5, 5, 35)
        line(10, 5, 10, 35)
        line(15, 5, 15, 35)

        line(0, 15, 25, 15)

}

