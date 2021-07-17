var thiefImg , tom ,  cone , box , backGroundImg ;


function preload(){
  backGroundImg = loadImage("road2.png");
  thiefImg = loadImage("bank robber.jpg");
  cone = loadImage("roadCone.png");
  box = loadImage("parcelBox.png");
}

function setup() {
  createCanvas(400,600);
  bg = createSprite(280,300,800,900);
  bg.addImage(backGroundImg);
  bg.scale = 1.8;

  thief = createSprite(200, 300, 0, 0);
  thief.addImage(thiefImg);

  tom = createSprite(200,500,50,50);
  

  cone = createSprite(200,300,50,50);
  cone.addImage(cone);

  box = createSprite(200,100.50,50);
  box.addImage(box);

  
}

function draw() {
  background(0);  
  drawSprites();
}