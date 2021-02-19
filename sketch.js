var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 200, 40, 30);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(200,100,40,100);


  gameObject2=createSprite(100,100,40,100);
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){
    movingRect.shapeColor = "aqua";
    gameObject1.shapeColor = "aqua";
    fixedRect.shapeColor="aqua";
    gameObject2.shapeColor="aqua";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

