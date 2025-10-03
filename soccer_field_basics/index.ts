function setup() {
    // It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;

// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;
    // We must calculate the size of the canvas using the constants.
    // Note that we assume that the soccer field has a width of 100m
    // and a height of 70m.
    createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
    background("green");

    strokeWeight(0.5);
    stroke("white");
    noFill();
    angleMode(DEGREES);
    strokeWeight(3)
    rect(10, 10, 400, 300);
    rect(10, 75, 100, 170);
    rect(310, 75, 100, 170);
    line(205, 10, 205, 310);

    fill("White");
    circle(205, 155, 5);

    noFill();
    circle(205, 155, 70)
    rect(10, 105, 45, 110)
    rect(365, 105, 45, 110)

    fill("White")
    circle(90, 155, 5)
    circle(330, 155, 5)


    push();

    // Note that we scale everything by the constant SCALE. We use the size values
    // in meters as if they were pixels, and then scale them up by the SCALE factor.
    // Experiment with different SCALE values to see how it works.
    scale(SCALE);

    // translate moves the origin of the coordinate system. 0/0 will not be
    // in the top-left corner, but MARGIN pixels to the right/down.
    // Experiment with different MARGIN values to see how it works.
    translate(MARGIN, MARGIN);

    // TODO: Draw the soccer field as close as possible to a real soccer field.
    // <<< ADD YOUR CODE HERE
}
