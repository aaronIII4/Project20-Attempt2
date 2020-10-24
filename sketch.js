var car
var wall
var speed
var weight
var deformation
function setup() {
  createCanvas(1600,400);
  car = createSprite(50,50, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,50, 50, 50);
  wall = color(80,80,80)
  speed=Math.round(random(45,60))
  weight=Math.round(random(1522,3000))
  deformation = Math.round(random(60,220))
}

function draw() {
  background(255,255,255);
  drawSprites();
  if (car.x = 1350 + deformation) {
    car.velocityX = 0;
    if (deformation < 100) {
      car.shapeColor = color(0,255,0)
    } else if (deformation > 180) {
      car.shapeColor = color(255,0,0)
    } else {
      car.shapeColor = color(230,230,0)  
    }
  }
  car.depth = wall.depth+1
}