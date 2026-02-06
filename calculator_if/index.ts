const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
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

    for (let i = 0; i < 6; i++) {
        line(i, lineHeight * i, width, lineHeight * i)
    }

    // for (let i = 0; i < 5; i++) {
    //     line(cellWidth * i, lineHeight, cellWidth * i, height)
    // }

    line(cellWidth * 2, lineHeight, cellWidth * 2, height)
    line(cellWidth, lineHeight, cellWidth, lineHeight * 4)

    textAlign(CENTER, CENTER)
    



    function mouseClicked() {
        // <<< Add code here
    }
