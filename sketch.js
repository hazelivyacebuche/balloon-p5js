
var x = 0;
var y = 0;
var speed_x = 2;
var speed_y = 2;

var cloud = 500;


function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(78,179,220);

// My Cloud
  fill(255);
  noStroke();
  ellipse(cloud,40,60,40);
  ellipse(cloud+30,40,60,40);
  ellipse(cloud+15,50,60,50);
  ellipse(cloud+50,50,60,45);
  
  cloud = map(x,0,400,50,150)
   
// My Sun
  
  fill(244,232,100);
  ellipse(440,50,80,80)
  stroke(0);
  
// My Balloon
  
  fill(0, 0, 0);
  ellipse(x, y, 50, 50);
  fill(50,30,100)
  rectMode(CENTER)
  
// Curve
  rect(x,y+50,20,20)
  fill(11,102,35);
  
// Grass
  noStroke();
  fill(26,169,110)
  rect(0,380,1500,40)
  
// Rope
  stroke(0);
  line(x,y,x,y+40)
  line(x-25,y,x-10,y+40)
  line(x+25,y,x+10,y+40)

  if (x > 475) {
    //print("OFF THE SCREEN!")
    speed_x = random(-1,-2)
  }
  
  if (x<25) {
    speed_x = random(1,2)
  }
  
x = x + speed_x
  
  if (y > 300) {
    speed_y=random(-1,-2)
  }
  
  if (y<25) {
    speed_y=random(1, 2)
  }
  
  y = y + speed_y

}