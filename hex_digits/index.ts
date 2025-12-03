function setup() {
  const num = Math.floor(random(0, 256));

  const number1 = num % 16
  const number2 = floor(num / 16) % 16
  const number3 = floor(num / 256) % 16

  let digit1: string
  let digit2: string
  let digit3: string

  if (number1 === 10) {
    digit1 = "A"
  }

  else if (number1 === 11) {
    digit1 = "B"
  }

  else if (number1 === 12) {
    digit1 = "C"
  }

  else if (number1 === 13) {
    digit1 = "D"
  }

  else if (number1 === 14) {
    digit1 = "E" 
  }

  else if (number1 === 15) {
    digit1 = "F"
  }
  
  else {
    digit1 = `${number1}`
  }
//------------------------------------------------------------------------------------------
  if (number2 === 10) {
    digit2 = "A"
  }

  else if (number2 === 11) {
    digit2 = "B"
  }

  else if (number2 === 12) {
    digit2 = "C"
  }

  else if (number2 === 13) {
    digit2 = "D"
  }

  else if (number2 === 14) {
    digit2 = "E" 
  }

  else if (number2 === 15) {
    digit2 = "F"
  }
  
  else {
    digit2 = `${number2}`
  }
//----------------------------------------------------------------------------------------------
  if (number3 === 10) {
    digit3 = "A"
  }

  else if (number3 === 11) {
    digit3 = "B"
  }

  else if (number3 === 12) {
    digit3 = "C"
  }

  else if (number3 === 13) {
    digit3 = "D"
  }

  else if (number3 === 14) {
    digit3 = "E" 
  }

  else if (number3 === 15) {
    digit3 = "F"
  }
  
  else {
    digit3 = `${number3}`
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
  text(number3, 45, 100)
  text(digit2, 105, 100)
  text(digit1, 165, 100)


  text(num, width / 2, height / 2);
}