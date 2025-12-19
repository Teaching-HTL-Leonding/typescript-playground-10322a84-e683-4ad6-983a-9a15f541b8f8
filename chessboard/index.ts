function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("white");

    noStroke();

    
    for (let a = 0; a < SIZE; a += 100) {
        fill("brown")
        rect(0, a, SIZE, SQUARE_SIZE)
    }
}
