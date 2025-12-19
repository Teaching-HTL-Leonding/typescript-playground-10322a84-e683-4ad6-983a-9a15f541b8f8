function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let a = 0
    for(a = 0; a < SIZE; a += 50) {
        fill("lime")
        rect(a, 0, SIZE, STRIPE_THICKNESS)
    }
}
