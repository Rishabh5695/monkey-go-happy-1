
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0
var gamestate="play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  ground=createSprite(200,380,400,20)
  ground.visible=false
monkey=createSprite(50,350,10,10)
  monkey.addAnimation("monkeyrunning",monkey_running)
  monkey.scale=0.1
  foodGroup=new Group()
  obatacleGroup=new Group()
  
}


function draw() {
background("lightblue")
  if(gamestate==="play"){
     if(keyDown("space")&&monkey.y>=339){
    monkey.velocityY=-20
  }
  monkey.velocityY=monkey.velocityY+0.8
  spawnobstacle()
  spawnbanana()
if(foodGroup.isTouching(monkey)){
  score=score+1
}
    if(obatacleGroup.isTouching(monkey)){
      gamestate="end"
    }
      monkey.collide(ground)
  drawSprites()
     textSize(20)
  fill("green")
  text("score" +score , 180 , 50);

  }
 if(gamestate==="end"){
   background("black")
    textSize(50)
  fill("YELLOW")
  text("GAME OVER"  , 50 , 200);

 }
 
 
}
function spawnobstacle(){
  if(frameCount%200===0){
    obstacle=createSprite(400,350,10,10)
    obstacle.addImage(obstacleImage)
  obstacle.velocityX=-2
    obstacle.scale=0.1
    obstacle.lifetime=200
     obatacleGroup.add(obstacle)
  }
}

function spawnbanana(){
  if(frameCount%250===0){
    banana=createSprite(400,200,10,10)
    banana.addImage(bananaImage)
  banana.velocityX=-2
    banana.scale=0.1                                     
    banana.lifetime=200
    foodGroup.add(banana)
  }
}



