var hr,min,sec;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr=hour();
  min=minute();
  sec=second();

  hr=anglemode(DEGREES);
  min=anglemode(DEGREES);
  sec=anglemode(DEGREES);

}

function draw() {
  background(255,255,255);  
  hrAngle=map(hr,60,0,360,0);
  minAngle=map(min,60,0,360,0);
  secAngle=map(sec,60,0,360,0);

  push();
  rotate(scAngle);
  stroke(225,0,0);
  strokeWeight(7);
  line (0,0,100,0);
  pop();

  drawSprites();
}