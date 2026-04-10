function setup() {
    createCanvas(450, 370);   // create a 450×370 px drawing surface
    background("black");      // fill the canvas with black
    stroke("yellow");         // all future lines will be yellow
    // (no fill() call → shapes are outlines only)

    // Move the coordinate origin 10 px right and 10 px down.
    // Every subsequent drawing call is now relative to (10, 10),
    // giving us a small margin around the hive.
    translate(10, 10);

    // Draw a single hexagon using six line() calls.
    //
    // Vertex layout (pixel coordinates, origin = top-left of bounding box):
    //
    //          (20,0) ──────── (45,0)
    //         /                      \
    //      (0,25)                  (65,25)
    //         \                      /
    //          (20,50) ──────── (45,50)
    //
    // Each line() call: line(x1, y1, x2, y2)

    drawHexagon()

    for (let x = 0; x < 5; x++) {
        translate(90, 0)
        drawHexagon()
    }

    translate(-540, 55)
    for (let y = 0; y < 5; y++) {
        translate(90, 0)
        drawHexagon()
    }

    translate(-540, 55)
    for (let a = 0; a < 6; a++) {
        translate(90, 0)
        drawHexagon()
    }

    translate(-540, 55)
    for (let z = 0; z < 6; z++) {
        translate(90, 0)
        drawHexagon()
    }

    translate(-540, 55)
    for (let b = 0; b < 6; b++) {
        translate(90, 0)
        drawHexagon()
    }

    translate(-540, 55)
    for (let c = 0; c < 6; c++) {
        translate(90, 0)
        drawHexagon()
    }
}


function drawHexagon() {
    stroke("yellow")
    line(20, 0, 45, 0)
    line(45, 0, 65, 25)
    line(65, 25, 45, 50)
    line(45, 50, 20, 50)
    line(20, 50, 0, 25)
    line(0, 25, 20, 0)
    drawHexagon2()
}


// function drawHexagon2() {
//     // translate(0, 70)
//     // drawHexagon()
// }