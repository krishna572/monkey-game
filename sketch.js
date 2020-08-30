
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground , groundImg;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundImg = loadImage("ground.png");
  
  
  
  
  
}



function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(100,162);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,190,1200,10);
  ground.addImage(groundImg);
  
}


function draw() {
  
  background("green");
  
  ground.velocityX = -4;
  if(ground.x < 0){
  ground.x = 300;   
  }
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y <= 162) {
    monkey.velocityY = -13;
                       }
  score = score+1;
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 1
  
  
  banana();
  obstacle();
  drawSprites();
  fill ("blue");
  text("survival "+score,400,20);
  noFill();
}

function banana(){
  if (frameCount % 80 === 0) {
    
  var banana = createSprite(random(300,600),random(1,100));
  banana.velocityX = -4;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 200;
  }
}

function obstacle(){
  if (frameCount % 300 === 0){
  var obstacle = createSprite(600,162);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.2;
  }
}


