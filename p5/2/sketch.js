var value = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
  for (var i = 0; i <= 100; i+=20) {
        noFill();
        stroke(value);
        strokeWeight(3);
        ellipse(touchX,touchY,i);   
	}
}

	
function mousePressed(){
    if(value == 0 ){
        value = 255;
    }else {
        value = 0;
    }
}