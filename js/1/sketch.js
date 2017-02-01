function setup() {
  canvas = createCanvas( windowWidth, windowHeight );
  frameRate(10);
}

function draw() {

  stroke( 255 );

  var i,
    style;

  for ( i = 0; i < width; i+=4 ) {

    style = i % 3;
    switch( style ) {
      case 0:
        line( i, 0, i, windowHeight/3 );
        break;
      case 1:
        line( i,windowHeight/3 , i, (windowHeight*2)/3 );
        break;
      case 2:
        line( i, (windowHeight*2)/3, i, windowHeight );
        break;
    }
  }
  
  rectMode(CENTER);
  fill(255);
  noStroke();
  blendMode(DIFFERENCE);
  ellipse(mouseX,mouseY,random(100),random(100));
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}