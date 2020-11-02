var car,wall
var speed,weight
var rectangle
var wall
var wall,thickness
var bullet,speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(300,52);
  thickness=random(22,83);
rectangle=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2);
wall.shapecolour(80,80,80);
car.velocityX= speed;
}

function draw() {
  background(255,255,255);  
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed*speed/22509;
    if(deformation>180)
  
  car.shapecolour=colour(225,0,0);
}
if(deformation<180&&deformation>100){
  car.shapecolour=colour(230,230,0);
}
if(deformation<100){
  car.shapecolour=colour(0,225,0);
}
}
  drawSprites();
  function hasCollided(bullet,wall){
    bulletRightEdge=1bullet.x+1bullet.width;
    

