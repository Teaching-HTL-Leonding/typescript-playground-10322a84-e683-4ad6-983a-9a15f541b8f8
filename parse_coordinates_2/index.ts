// The following string represents coordinates (x,y) of points
// that you have to connect with lines. Each line connects two consecutive points.
const points = "200,100 300,150 300,250 200,300 100,250 100,150 200,100 ";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);

    let x1 = 0 //x Kooridnate vom vorherigen Punkt
    let y1 = 0 //y Koordinate vom vorherigen Punkt
    let x2 = 0 //Hilfsvariable für aktuelle X Koordinate
    let y2 = 0 //Hilfsvariable für aktuelle Y Koordinate
    let coordinates = "" //Hilftsvariable für aktuellen Wert
    let spaceCharsfound = 0 //Wie viele Leerzeichen haben wir schon gefunden?

    for (let i = 0; i < points.length; i++) {
        if(points[i] === ",") {
            //Komma gefunden -> in coordinates steht x
            x2 = parseInt(coordinates)
            coordinates = ""
        } else if (points[i] === " ") {
            //Leerzeichen gefunden -> im coordinates steht y
            y2 = parseInt(coordinates)

            if(spaceCharsfound > 0) {
            line(x1, y1, x2, y2)
            }

            spaceCharsfound++
            x1 = x2 //Den aktuellen Punkt als vorherigen Punkt merken
            y1 = y2
            coordinates = ""
        } else {
            // Es ist eine Ziffer
            coordinates += points[i]
        }
    }
}
