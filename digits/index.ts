function setup() {
  const num = Math.floor(random(0, 1_000_000));

  const number1 = num % 10
  const number2 = floor(num / 10) % 10
  const number3 = floor(num / 100) % 10
  const number4 = floor(num / 1000) % 10
  const number5 = floor(num / 10000) % 10
  const number6 = floor(num / 100000) % 10

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
  text(number6 % 10, 45, 100)
  text(number5 % 10, 105, 100)
  text(number4 % 10, 165, 100)
  text(number3 % 10, 225, 100)
  text(number2 % 10, 285, 100)
  text(number1 % 10, 345, 100)


  text(num, width / 2, height / 2);
}
