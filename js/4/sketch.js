var elephant;

function setup() {
  createCanvas(windowWidth, windowHeight);
  elephant =loadImage("elephant.jpg");
}

function draw() {
  background (100,100,0,30);
  noStroke();
  imageMode(CENTER);
  image(elephant,random(200,400),random(200,400),elephant.width/7,elephant.height/7);
  fill(100,200,10,50);
  rect(random(windowWidth/2),random(windowHeight/2),20,20);
  fill(200,100,10,80);
  rect(random(windowWidth/2,windowWidth),random(windowHeight/2),30,30);
  fill(10,200,100,60);
  rect(random(windowWidth/2),random(windowHeight/2,windowHeight),30,30);
  fill(100,10,200,70);
  rect(random(windowWidth/2,windowWidth),random(windowHeight/2,windowHeight),20,20);
  fill(10,100,20,50)
  ellipse(mouseX,mouseY,80,80);
}