function setup() {
  const num = Math.floor(random(0, 256));

  const number1 = num % 16
  const number2 = floor(num / 16) % 16
  const number3 = floor(num / 256) % 16

  let digit1: string
  let digit2: string
  let digit3: string
  let digit4: string
  let digit5: string
  let digit6: string

  if (number1 === 10) {
    digit1 = "A"
  }

  else if (number2 === 11) {
    digit2 = "B"
  }

  else if (number3 === 12) {
    digit3 = "C"
  }

  else if (number4 === 13) {
    digit4 = "D"
  }

  else if (number5 === 14) {
    digit5 = "E" 
  }

  else if (number6 === 15) {
    digit6 = "F"
  }



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

  textSize(30)
  fill("yellow")
  text(number6, 45, 100)
  text(number5, 105, 100)
  text(number4, 165, 100)
  text(number3, 45, 100)
  text(number2, 105, 100)
  text(number1, 165, 100)


  text(num, width / 2, height / 2);


}
