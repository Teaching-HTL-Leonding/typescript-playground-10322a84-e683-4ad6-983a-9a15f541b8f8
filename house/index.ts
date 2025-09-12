function setup() {
    createCanvas(2000, 5000);
    background("cornflowerblue");

    stroke("black")
    strokeWeight(10)
    fill("chocolate")
    triangle(400, 200, 100, 350, 700, 350);

    fill("red");
    rect(200, 350, 400, 500);

    fill("yellow");
    rect(350, 600, 100, 250);

    fill("chocolate");
    stroke("chocolate");
    strokeWeight(10)
    rect(1100, 500, 100, 350)
    
    fill("green");
    stroke("green")
    circle(1050, 400, 350)
    circle(1150, 250, 350)
    circle(1250, 400, 350)

    //Fertig :)
}