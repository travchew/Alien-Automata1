circle_count = 25;
circle_size = 30; // initial size of circles
circles = [];
hives = [];
sqorpses = [];
flakes = [];
cellMode = false;

run = false;
circleSetup = false;

function preload() {
  title = loadImage("title_screen.png");
}

function circleSpawn() {
  for (let i = 0; i < circle_count; i++) {
    circles[i] = new   Circle(random(0,width),random(0,height),i,random(circle_size-4,circle_size+7));
  }
}

function titleScreen() {
  image(title, 0, 0);
  push();
  fill(255);
  textSize(15);
  text('Some runs can just result in death.', 40, height/2-70);
    text('Experiment with different options and run multiple times! ', 40, height/2-50);
  textSize(30);
  text('Spaceworms: ' + circle_count, 40, height/2);
  textSize(15);
  text('change with up and down arrows', 40, (height/2)+25);
  textSize(30);
    text('CellMode: ' + cellMode, 40, (height/2)+65);
  textSize(15);
  text('toggle with c key', 40, (height/2)+90);
  pop();
}

function keyPressed() {
  if (key == ' ') {
    run = true;
  }
  if (key == 'c') {
    if (cellMode == false) cellMode = true;
    else cellMode = false;
  }
  if (keyCode === UP_ARROW) {
    circle_count += 1;
  }
  if (keyCode === DOWN_ARROW) {
    circle_count += -1;
  }
}

function setup() {
  rectMode(CENTER);
  angleMode(DEGREES);
  noiseDetail(3, 0.5);
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (run == false) {
    titleScreen();
  }
  else if ((circleSetup == false) && run == true) {
    circleSpawn();
    background(255);
    circleSetup = true;
  }
  if ((cellMode == true) && (run == true)) background(1);
  for (let i = 0; i < sqorpses.length; i++) {
    sqorpses[i].display();
    sqorpses[i].grow();
    sqorpses[i].collision();
  }
  for (let i = 0; i < circles.length; i++) {
    circles[i].display();
    circles[i].move();
    circles[i].collision();
    circles[i].death();
  }
  for (let i = 0; i < flakes.length; i++) {
    flakes[i].display();
    flakes[i].move();
  }
    for (let i = 0; i < hives.length; i++) {
    hives[i].display();
    hives[i].decay();
    hives[i].spawn();
  }
}

