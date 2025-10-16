function setup() {
  createCanvas(2000, 2000);


}

function mouseMoved() {
  //background("aqua")
  stroke("green");
  noFill();
  circle(mouseX, mouseY, 20);
  circle(mouseX, mouseY, 40);
  line(mouseX, mouseY-30, mouseX, mouseY+30)
  line(mouseX-30, mouseY, mouseX+30, mouseY)

}
