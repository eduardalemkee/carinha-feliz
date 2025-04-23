function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200,200,300);
  circle(120,150,50);
  circle(280,150,70);
  line(181,260,245,260);
  triangle(200,210,230,210,210,180);
  triangle(80,110,125,70,80,55);
  triangle(285,75,322,115,330,55);
  line(178,200,122,190);
  line(178,213,130,237);
  line(172,209,102,214);
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
  }
}