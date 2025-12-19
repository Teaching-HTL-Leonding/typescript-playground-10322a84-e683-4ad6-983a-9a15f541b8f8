function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");
    noStroke();

   let a = 15
   for(a = 15; a < SIZE; a += GRID) {
    fill("yellow")
    rectMode(CENTER)
    rect(a, a, GRID, GRID)
   }

   let b = 15
   for(b = 15; b < SIZE; b += GRID) {
    fill("lime")
    rectMode(CENTER)
    rect(b, SIZE - b, GRID, GRID)
   }
}
