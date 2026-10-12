let xMax = 400;
let yMax = 400;

let xTv = xMax / 2;
let yTv = yMax * 0.4;

function setup() {
  createCanvas(xMax, yMax);
  frameRate(30);
}

function draw() {
  background("#f1f444");
  drawTv();
}

function drawTv() {
  push();
  
  //tv
  fill(20);
  stroke(40);
  strokeWeight(10);
  rectMode(CENTER);
  rect(xTv, yTv + 30, 300, 140, 0);

  //linee
  stroke(40, 100); 
  strokeWeight(1);

  let offsetLinee = (frameCount * 1) % 10;
  for (let y = yTv - 50; y <= yTv + 100; y += 10) {
    line(xTv - 140, y + offsetLinee, xTv + 140, y + offsetLinee);
  }

  //testo "NO SIGNAL"
  let offsetY = sin(frameCount * 0.1) * 5;

  if (frameCount % 60 < 40) {
    fill(255);                 
    noStroke();                
    textSize(24);              
    textAlign(CENTER, CENTER); 
    text("NO SIGNAL", xTv, (yTv + 30) + offsetY); 
  }

  //base tv
  fill(255);
  stroke(40);
  strokeWeight(10);
  rect(xTv, yTv + 110, 100, 10, 20);
  
  //led
  strokeWeight(1);           
  stroke(100, 0, 0);         
  fill(200, 40, 40);         
  ellipse(xTv + 35, yTv + 110, 8, 8);

  pop();
}