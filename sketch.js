var girl, girl_running, girl_collided;
var invisibleGround;
var bg,bgimg;
var gems,bat,bear

function preload(){
  girl_running = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png");
   girl_collided = loadAnimation("girl_collided.png");
  
  bgimg=loadImage("Images/bg4.jpg");
 
}

function setup() {
  createCanvas(650,600);
  
  /*invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;*/
  
  bg = createSprite(50,300,10,10);
  bg.addImage(bgimg);
  bg.x = bg.width/4;

  girl = createSprite(50,160,20,50);
  girl.addAnimation("running", girl_running);
  girl.addAnimation("collided", girl_collided);
  

}

function draw() {
  
  background(180);
    bg.velocityX = -6;

    if (bg.x < 0){
      bg.x = bg.width/4;
    }

  drawSprites();
}

