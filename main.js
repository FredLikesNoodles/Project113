function preload() {}
function setup() {
  canvas = createCanvas(800, 600);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 130, 100, 550, 400);
  fill("cyan");
  rect(100, 20, 610, 35, 20);
  rect(100, 540, 610, 35, 20);
  fill("yellow");
  rect(75, 50, 35, 490, 20);
  rect(695, 50, 35, 490, 20);
  fill("purple");
  circle(90, 37, 70);
  circle(710, 37, 70);
  circle(90, 557, 70);
  circle(710, 557, 70);
}

function take_snapshot() {
  save("mypic.png");
}
