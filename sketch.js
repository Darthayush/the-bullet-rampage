var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {

  createCanvas(2600,800);

  bullet =createSprite(50,250,50,50);
bullet.shapeColor="white";
wall=createSprite(1300,290,thickness,height/2);
bullet.shapeColor="blue";
speed=random(31,223);
weight=random(30,52);
thickness=random(22,83);
}

function draw() {
  background(0);  
  bullet.velocityX=speed; 

  if(bullet.isTouching(wall)){ 
    bullet.visible=false;
   
  damage=0.5*weight*speed*speed/thickness*thickness*thickness
 
    if(damage=12.43){
    wall.shapeColor="red"
  } 
  
 else if (damage=12.68){
     wall.shapeColor="green"
   }

}

    bullet.collide(wall);  
    drawSprites();

}