function setup() {
    const SIZE = 400;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;           
    }

    // Part 2: Draw horizontal lines
    let a = GRID
    while (a < SIZE) {
        line(0, a, SIZE, a)
        a += GRID
    }
}
