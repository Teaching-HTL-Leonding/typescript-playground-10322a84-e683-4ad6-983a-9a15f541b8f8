function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();


    let a = 5
    for(a = 5; a <= SIZE; a+=GRID) {
    fill("yellow")
    rectMode(CENTER)
    rect(a, a, GRID, GRID)
    }

    let b = 5
    for(b = 5; b <= SIZE; b+=GRID) {
        fill("lime")
        rectMode(CENTER)
        rect(b, SIZE - b, GRID, GRID)
    }



}
