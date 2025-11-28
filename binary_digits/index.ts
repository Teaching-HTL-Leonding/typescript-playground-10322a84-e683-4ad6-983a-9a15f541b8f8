function setup() {
  const num = Math.floor(random(0, 64));

  const number1 = num % 2
  const number2 = floor(num / 2) % 2
  const number3 = floor(num / 4) % 2
  const number4 = floor(num / 8) % 2
  const number5 = floor(num / 16) % 2
  const number6 = floor(num / 32) % 2

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height / 2);


  createCanvas(600, 500)
  stroke("yellow")
  noFill()
  rect(20, 60, 50, 100)
  rect(80, 60, 50, 100)
  rect(140, 60, 50, 100)
  rect(200, 60, 50, 100)
  rect(260, 60, 50, 100)
  rect(320, 60, 50, 100)

  textSize(30)
  fill("yellow")
  text(number6, 45, 100)
  text(number5, 105, 100)
  text(number4, 165, 100)
  text(number3, 225, 100)
  text(number2, 285, 100)
  text(number1, 345, 100)


  text(num, width / 2, height / 2);
}
