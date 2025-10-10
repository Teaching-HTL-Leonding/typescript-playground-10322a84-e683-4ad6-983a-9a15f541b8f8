const DIAMETER = 80
const DIAMETER2 = 70

function setup() {
  createCanvas(500, 500)
  background("white")

  angleMode(DEGREES);
  noFill()
  stroke("green")
  strokeWeight(20)
  arc(165, 300, 500, 500, -45, 45)

  strokeWeight(1)
  fill("lightgreen")
  stroke("black")
  circle(400, 150, DIAMETER)
  circle(350, 100, DIAMETER)
  circle(300, 150, DIAMETER)
  circle(350, 200, DIAMETER)


  fill("yellow")
  stroke("yellow")
  circle(350, 150, 65)

  circle(100, 150, 65)
  circle(150, 150, DIAMETER2)


}
