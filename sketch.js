let x = 0;   // starting x position of the circle

function setup() {
  createCanvas(600, 400);   // canvas size
}

function draw() {
  background(220);          // clear background each frame

  // draw the circle
  fill(0, 100, 255);
  ellipse(x, height/2, 50, 50);   // circle at (x, middle of canvas)

  // move the circle to the right
  x = x + 2;   // increase x each frame

  // if circle goes off the right edge, reset to the left
  if (x > width) {
    x = 0;
  }
}