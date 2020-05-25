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

  if(Collided(bullet,wall)){  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(225,0,0);
  bullet.visible=false;
  }

  if(damage<10){
  wall.shapeColor=color(0,225,0);
  bullet.visible=false;
  }

  
 
}

    bullet.collide(wall);  
    drawSprites();

}

function Collided(lbullet,lwall){

bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge= lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
     
       return true
 }
return false;

}





