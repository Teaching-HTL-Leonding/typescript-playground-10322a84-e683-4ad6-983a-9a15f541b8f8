function setup() {
    createCanvas(500, 500)
    background("magenta")
    textAlign(CENTER, CENTER)



    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            fill("darkred")
            noStroke()
            circle(50, 50, 100)

            fill("white")
            text(`x=${x}, y=${y}`, 50, 50)
            translate(100, 0)
        }

        translate(-500, 100)
    }





}
