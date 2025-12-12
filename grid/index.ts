function setup() {
    const SIZE = 400;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgrey");

    //Part 1: Vertical lines
    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;           
    }

    //Part 1 mit For-Schleife
    for (i = GRID; i < SIZE; i += GRID) {
        line(i, 0, i, SIZE)
    }

    // Part 2: Draw horizontal lines
    let a = GRID
    while (a < SIZE) {
        line(0, a, SIZE, a)
        a += GRID
    }

    //Part 2 mit For-Schleife
    for (a = GRID; a < SIZE; a += GRID) {
        line(0, a, SIZE, a)
    }


}
