function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("yellow");

    noStroke();


    for(let a = 0; a < SIZE; a += 100) {
        fill("lime")
        rect(0, a, SIZE, STRIPE_THICKNESS)
    }
}