// The following string represents coordinates (x,y) of points
// that you have to connect with lines. Each line connects two consecutive points.
const points = "200,100 300,150 300,250 200,300 100,250 100,150 200,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);

    let x = 0
    let y = 0
    let coordinates = ""

    for (let i = 0; i < points.length; i++) {



        if (points[i] === ",") {
            x = parseInt(coordinates)
            coordinates = ""
        } else if (points[i] === " ") {
            y = parseInt(coordinates)
            line(x, y, x, y)
            coordinates = ""
        } else {
            coordinates += points[i]
        }
    }
    y = parseInt(coordinates)
    line(x, y, x, y)

}