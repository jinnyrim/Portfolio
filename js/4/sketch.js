var elephant;

function setup() {
  createCanvas(600,600);
  elephant =loadImage("elephant.jpg");
}

function draw() {
  background (100,100,0,30);
  noStroke();
  imageMode(CENTER);
  image(elephant,random(200,400),random(200,400),elephant.width/7,elephant.height/7);
  fill(100,200,10,50);
  rect(random(300),random(300),20,20);
  fill(200,100,10,80);
  rect(random(300,600),random(300),30,30);
  fill(10,200,100,60);
  rect(random(300),random(300,600),30,30);
  fill(100,10,200,70);
  rect(random(300,600),random(300,600),20,20);
  fill(10,100,20,50)
  ellipse(mouseX,mouseY,80,80);
}