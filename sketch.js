//GIVING THE VARIABLES//

var bow, arrow, green_ballon, red_balloon, pink_balloon,
  blue_balloon, bg1;
var bowImage, arrowImage, green_balloonImage,
  red_balloonImage, pink_ballonImage, blue_balloonImage,
  bgImage;
var redB, blueB, greenB, pinkB;

var score = 0;

//THE FUNCTION TO LOAD THE IMAGES AS PER THE NEED//

function preload() {

  //LOADING ALL THE IMAGES//  

  backgroundImage = loadImage("galaxy.jpg");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("yellow.png");
  red_balloonImage = loadImage("red.png");
  pink_balloonImage = loadImage("white.png");
  blue_balloonImage = loadImage("blue.png");
}

function setup() {

  //CREATING THE CANVAS//
  createCanvas(500, 500);


  //MAIN CODING FOR THE BACKGROUND//
  bg1 = createSprite(0, 0, 800, 800);
  bg1.addImage("background", backgroundImage)
  bg1.scale = 3;
  bg1.velocityX = -4;
  bg1.x = bg1.width / 2;

  //PLACING THE BOW//
  bow = createSprite(450, 230, 40, 100);
  bow.addImage("bow", bowImage)
  
  redB_group = new Group();
  blueB_group = new Group();
  greenB_group = new Group();
  pinkB_group = new Group();
  arrow_group = new Group();
}


function draw() {

  background("white");

  //CODITION//
  if (bg1.x < 0) {
    bg1.x = bg1.width / 2;
  }

  //Y POSITION OF BOW//
  bow.y = World.mouseY;


  if (keyWentDown("space")) {
    createArrow();
  }

  if (World.frameCount % 80 === 0) {

    var select_balloon = Math.round(random(1, 4));
    console.log(select_balloon);

    if (select_balloon === 1) {
      Red_Balloon()
    } else if (select_balloon === 2) {
      Blue_Balloon()
    } else if (select_balloon === 3) {
      Green_Balloon()
    } else if (select_balloon === 4) {
      Pink_Balloon()
    }
  }

  drawSprites();
  
  textSize(30);
    fill("white");
    //stroke("white");
    // strokeWeight(4);
  text("Score :" +score,4,30)
  
  if (arrow_group.isTouching(redB_group)){
    arrow_group.destroyEach();
    redB_group.destroyEach();
    score = score+5;
  }
  
  if (arrow_group.isTouching(blueB_group)){
    arrow_group.destroyEach();
    blueB_group.destroyEach();
    score = score+3;
  }
  
  if (arrow_group.isTouching(greenB_group)){
    arrow_group.destroyEach();
    greenB_group.destroyEach();
    score = score+2;
  }
  
  if (arrow_group.isTouching(pinkB_group)){
    arrow_group.destroyEach();
    pinkB_group.destroyEach();
    score = score+1;
  }
  
}

function createArrow() {
  arrow = createSprite(450, 230, 20, 20);
  arrow.addImage("arrow", arrowImage);
  arrow.scale = 0.5;
  arrow.velocityX = -6;
  arrow.y = bow.y;
  arrow.lifetime = 200;
  arrow_group.add(arrow);
}

function Red_Balloon() {
  redB = createSprite(0, Math.round(random(10, 380)), 10, 10);
  redB.addImage(red_balloonImage);
  redB.velocityX = 3;
  redB.scale = 0.6;
  redB.lifetime = 300;
  redB_group.add(redB);
}

function Blue_Balloon() {
  blueB = createSprite(0, Math.round(random(10, 380)), 10, 10);
  blueB.addImage(blue_balloonImage);
  blueB.velocityX = 3;
  blueB.scale = 0.6;
  blueB.lifetime = 300;
  blueB_group.add(blueB);
}

function Green_Balloon() {
  greenB = createSprite(0, Math.round(random(10, 380)), 10, 10);
  greenB.addImage(green_balloonImage);
  greenB.velocityX = 3;
  greenB.scale = 0.7;
  greenB.lifetime = 300;
  greenB_group.add(greenB);
}

function Pink_Balloon() {
  pinkB = createSprite(0, Math.round(random(10, 380)), 10, 10);
  pinkB.addImage(pink_balloonImage);
  pinkB.velocityX = 3;
  pinkB.scale = 0.6 ;
  pinkB.lifetime = 300;
  pinkB_group.add(pinkB);
}