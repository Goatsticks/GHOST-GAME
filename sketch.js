var door,doorImg,doorGroup
var tower,towerImg
var climber,climberImg,climberGroup
var ghost,ghostImg
var invisibleClimber,invisibleClimberGroup
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
    climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");

}



function setup(){
 createCanvas(600,600) 
  doorGroup= new Group();
   invisibleClimberGroup= new Group();
   climberGroup= new Group();
  

    tower = createSprite(300,300,600,600);
  tower.addImage("background",towerImg);
  
    ghost = createSprite(150,300,100,100);
  ghost.addImage("ghostt",ghostImg);
  ghost.scale=0.4;
  
}


function draw(){
  background("black");
  if(gameState===PLAY){
    
  spawnDoors();
  tower.velocityY=2;
  if(tower.y>600){
    tower.y=tower.width/2;
    
  }
  
  if(keyDown("Space")){
    ghost.velocityY=-2;
  }
  ghost.velocityY=  ghost.velocityY+0.5; 

  if(keyDown("Left")){
    ghost.x=ghost.x-5;
  }
    
  if(keyDown("Right")){
    ghost.x=ghost.x+5;
  }
  if(climberGroup.isTouching(ghost)){
  ghost.velocityY=0;
  }
  if(invisibleClimberGroup.isTouching(ghost) || ghost.y>600 ){
    ghost.destroy();
    gameState=END;
  }
   
   drawSprites();
  }
  if(gameState===END){
    textSize(50)
    stroke("Yellow")
    fill("Yellow")
    text("GAME OVER",150,300);
    
  }
  
}

function spawnDoors(){
  if(frameCount%120==0){
  door = createSprite(150,200,30,30);
    door.addImage("doors",doorImg);
    door.velocityY=2;
    door.x=Math.round(random(150,400))
     door.lifeTime=300;
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
       
    climber=createSprite(150,250,30,30);
    climber.addImage("climber",climberImg);
    climber.velocityY=2;
    climber.lifeTime=300;
     climber.x= door.x;
    
    
        
    invisibleClimber=createSprite(150,260,30,30);
      invisibleClimber.velocityY=2;
    invisibleClimber.visible=false;
    invisibleClimber.lifeTime=300;
    invisibleClimber.x=door.x;
    
    
    doorGroup.add(door);
   invisibleClimberGroup.add(invisibleClimber);
   climberGroup.add(climber);
           }
  
  
}