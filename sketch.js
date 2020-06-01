var gameState = 0;

var player, playerImg;

var lives = 3;
var score = 0;

var edges;

var bullet, bulletImg;
var bulletgrp;

var bg;

var bad, bad1, bad2,bad3, bad4, badImg;
var badgrp, badgrp1, badgrp2, badgrp3, badgrp4;

function preload(){
  playerImg = loadImage("Images/shooter.jpeg");
  bulletImg = loadImage("Images/bullet.jpg");
  bg = loadImage("Images/space.jpg");
  badImg = loadImage("Images/ufo.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  badgrp = createGroup();
  badgrp1 = createGroup();
  badgrp2 = createGroup();
  badgrp3 = createGroup();
  badgrp4 = createGroup();

  bulletgrp = createGroup();

  player = createSprite(displayWidth/2, displayHeight - 30, 20, 20);
  player.addImage(playerImg);

  edges = createEdgeSprites();
}

function draw() {
  background(bg);

  if(gameState === 0){
    fill("blue");
    textSize(50);
    text("Rules", displayWidth/2, displayHeight/2 - 50);

    fill("red");
    textSize(20);
    text("1) You have 3 lives", displayWidth/2, displayHeight/2);
    text("2) Left and Right keys to move", displayWidth/2, displayHeight/2 + 40);
    text("3) Press space to shoot at the enemy", displayWidth/2, displayHeight/2 + 80);
    text("4) +10 points for each kill", displayWidth/2, displayHeight/2 + 120);
    text("5) Press 'a' to start", displayWidth/2, displayHeight/2 + 160);

    if(keyWentDown("a")){
      gameState = 1;
    }
  }

  if(gameState === 1){
  console.log(mouseX, mouseY);

  bullets();
  life();
  die();

  if(lives <= 0){
    badgrp.velocityY = 0;
    badgrp1.velocityY = 0;
    badgrp2.velocityY = 0;
    badgrp3.velocityY = 0;

    badgrp.lifetime = -1;
    badgrp1.lifetime = -1;
    badgrp2.lifetime = -1;
    badgrp3.lifetime = -1;


    textSize(50);
    text("You Lose!!!", displayWidth/2, displayHeight/2);

  }else if(lives>0){
    evilship();
    evilship1();
    evilship2();
    evilship3();
    evilship4();
    evilship5();
    evilship6();
    evilship7();

    move();
  }

  player.collide(edges);

  textSize(20);
  fill("red");
  text("Lives: " + lives, 90, 30);

  text("Your Score: " + score, displayWidth - 150, 30);

  drawSprites();
}

}

function move(){
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX = -16;
    player.velocityY = 0;
  }
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX = 16;
    player.velocityY = 0;
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0;
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0;
  }
}

function bullets(){
  if(keyWentDown("space")){
    bullet = createSprite(200, 200, 20, 20);
    bullet.addImage(bulletImg);
    bullet.x = player.x;
    bullet.y = player.y;
    bullet.velocityY = -5;
    bullet.lifetime =  300;

    bulletgrp.add(bullet);
  }
}

function evilship(){
  if(World.frameCount % 100 === 0){
    bad = createSprite(random(0, displayWidth), 0, 10, 10);
    bad.addImage(badImg);
    bad.velocityY = 5;
    bad.lifetime = 300;

    badgrp.add(bad);
  }
}

function evilship1(){
  if(World.frameCount % 80 === 0){
    bad1 = createSprite(random(0, displayWidth), 0, 10, 10);
    bad1.addImage(badImg);
    bad1.velocityY = 8;
    bad1.lifetime = 300;

    badgrp1.add(bad1);
  }
}

function evilship2(){
  if(World.frameCount % 60 === 0){
    bad2 = createSprite(random(0, displayWidth), 0, 10, 10);
    bad2.addImage(badImg);
    bad2.velocityY = 10;
    bad2.lifetime = 300;

    badgrp2.add(bad2);
  }
}

function evilship3(){
  if(World.frameCount % 120 === 0){
    bad3 = createSprite(random(0, displayWidth), 0, 10, 10);
    bad3.addImage(badImg);
    bad3.velocityY = 8;
    bad3.lifetime = 300;

    badgrp3.add(bad3);
  }
}

function evilship4(){
  if(World.frameCount % 100 === 0){
    bad = createSprite(random(0, displayWidth), 0, 10, 10);
    bad.addImage(badImg);
    bad.velocityY = 5;
    bad.lifetime = 300;

    badgrp.add(bad);
  }
}

function evilship5(){
  if(World.frameCount % 80 === 0){
    bad1 = createSprite(random(0, displayWidth), 0, 10, 10);
    bad1.addImage(badImg);
    bad1.velocityY = 8;
    bad1.lifetime = 300;

    badgrp1.add(bad1);
  }
}

function evilship6(){
  if(World.frameCount % 60 === 0){
    bad2 = createSprite(random(0, displayWidth), 0, 10, 10);
    bad2.addImage(badImg);
    bad2.velocityY = 10;
    bad2.lifetime = 300;

    badgrp2.add(bad2);
  }
}

function evilship7(){
  if(World.frameCount % 120 === 0){
    bad3 = createSprite(random(0, displayWidth), 0, 10, 10);
    bad3.addImage(badImg);
    bad3.velocityY = 8;
    bad3.lifetime = 300;

    badgrp3.add(bad3);
  }
}



function die(){
  if(bulletgrp.isTouching(badgrp)){
    score = score + 10;
    badgrp.destroyEach();
    bulletgrp.destroyEach();
  }
  if(bulletgrp.isTouching(badgrp1)){
    score = score + 10;
    badgrp1.destroyEach();
    bulletgrp.destroyEach();
  }
  if(bulletgrp.isTouching(badgrp2)){
    score = score + 10;

    badgrp2.destroyEach();
    bulletgrp.destroyEach();
  }
  if(bulletgrp.isTouching(badgrp3)){
    score = score + 10;
    badgrp3.destroyEach();
    bulletgrp.destroyEach();
  }
}

function life(){
  if(badgrp.isTouching(player)){
    lives = lives - 1;
    badgrp.destroyEach();
  }

  if(badgrp1.isTouching(player)){
    lives = lives - 1;
    badgrp1.destroyEach();
  }

  if(badgrp2.isTouching(player)){
    lives = lives - 1;
    badgrp2.destroyEach();
  }

  if(badgrp3.isTouching(player)){
    lives = lives - 1;
    badgrp3.destroyEach();
  }
}