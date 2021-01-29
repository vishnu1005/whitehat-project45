let mySound;

var cop,cop_img;; 
var jail ,jail_img;
var thief,thief_img;
var brick1;
var wright,lepht,upht,downee;

function preload() {

 
  sherlock = loadSound('Sherlock-2.aac');

  cop_img=loadImage("star.png");
  jail_img=loadImage("jail.png");
  thief_img=loadImage("target.png")

}

function setup() {

  createCanvas(1200, 1000-200);

  cop=createSprite(200,200,20,20);
  cop.addImage(cop_img);
  cop.scale=0.2;

  jail=createSprite(1090,110,400,400);
  jail.addImage(jail_img);

  thief=createSprite(300,300,20,20);
  thief.velocityY=5;
  thief.velocityX=7;
  thief.addImage(thief_img);
  thief.scale=0.2;

  brick1=createSprite(300,400,400,10)
  wright=createSprite(975,1,10,10000)
  upht=createSprite(1,10,20000,10)
  lepht=createSprite(5,1,10,10000)
  downee=createSprite(5,789,10000,10)
 

}

function draw()
{
  
  background(240, 179, 12);

 createEdgeSprites();

 
thief.bounceOff(brick1);
thief.bounceOff(wright);
thief.bounceOff(upht);
thief.bounceOff(lepht);
thief.bounceOff(downee);


  if(keyDown(UP_ARROW)) {
    cop.velocityX =0;
    cop.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW)){
    cop.velocityX=0;
    cop.velocityY=5;
  }
  
  if(keyDown(RIGHT_ARROW))
  { 
  cop.velocityX=5;
  cop.velocityY=0;
  }
  
  if(keyDown(LEFT_ARROW))
  {
    cop.velocityX=-5;
    cop.velocityY=0;
  }

  //textSize(20);
 // text('Hello Player!!', 20, 20);
  //text('Tap here to play music', 20, 40);


  drawSprites();
}

////function sherlockSound() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  
  //sherlock.play();
//}