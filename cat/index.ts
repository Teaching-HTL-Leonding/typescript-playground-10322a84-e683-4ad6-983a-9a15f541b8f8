function setup() {
    createCanvas(2000, 5000);
    background("cornflowerblue");

    //Gesicht
    noFill()
    stroke("black");
    fill("DarkGrey");
    circle(200, 200, 300);

    //Augen
    fill("black");
    circle(250, 180, 30);
    circle(150, 180, 30);

    //Ohren
    stroke("black");
    fill("DarkGrey");
    triangle(100, 75, 75, 0, 50, 125);
    triangle(325, 0, 300, 75, 350, 125);

    //Nase
    stroke("black");
    fill("DimGrey");
    triangle(200, 250, 175, 225, 225, 225);

    //Bart
    stroke("Black");
    line(100, 225, 175, 250);
    line(300, 225, 225, 250);
    line(100, 260, 175, 260);
    line(225, 260, 300, 260);

    //Mund
    line(200, 250, 200, 280);
    line(150, 300, 200, 280);
    line(200, 280, 250, 300);
    line(100, 275, 150, 300);
    line(250, 300, 300, 275);

    //Fertig :)
}
