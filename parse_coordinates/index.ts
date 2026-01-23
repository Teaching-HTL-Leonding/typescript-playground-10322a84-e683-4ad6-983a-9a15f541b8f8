// The following string represents coordinates (x,y) of circles
// that you have to draw. Each circle must have a radius of 40.
const circles = "50,50 50,100 100,50 100,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);


    let x = 0 // X-Koordinate des Mittelpunkts des aktuellen Kreises
    let y = 0 // Y-Koordinate
    let coordinates = "" //Hilfsvariable
    for (let i = 0; i < circles.length; i++) {
        // Was kann in circles[i] stehen?
        // 1) Komma
        // 2) Leerzeilen
        // 3)
        if (circles[i] === ",") {
            x = parseInt(coordinates)
            coordinates = ""
        } else if (circles[i] === " ") {
            y = parseInt(coordinates)
            circle(x, y, 40)
            coordinates = ""
        } else {
            coordinates += circles[i]
        }
    }

    y = parseInt(coordinates)
    circle(x, y, 40)
}
