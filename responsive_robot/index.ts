function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  //Left eye
  const LeftEyeCenterX = headX + headWidth * 0.25
  const LeftEyeCenterY = headY + headHeight * 0.25
  const LeftEyeDiameter = min(headWidth, headHeight) * 0.2
  fill("black")
  circle(LeftEyeCenterX, LeftEyeCenterY, LeftEyeDiameter)

  //Right eye
  const RightEyeCenterX = headX + headWidth * 0.75
  const RightEyeCenterY = headY + headHeight * 0.25
  const RightEyeDiameter = min(headWidth, headHeight) * 0.2
  circle(RightEyeCenterX, RightEyeCenterY, RightEyeDiameter)

  //Mouth
  fill("white")
  const MouthCenterX = headX + headWidth * 0.25
  const MouthCenterY = headY + headHeight * 0.7
  const MouthWidth = min(headWidth, headHeight) * 0.5
  const MouthHeight = min(headWidth, headHeight) * 0.1
  rect(MouthCenterX, MouthCenterY, MouthWidth, MouthHeight)
}