function setup() {
    createCanvas(400,400);
    print('Hello');
 }
 
 function draw() {
   background(100);
 
   //this is the green rectangle in the center
    rectMode(CENTER);
    fill(0,0,225);
    stroke(0,0,225);
    strokeWeight(4);
    rect(200,150,150,150);

// red circle
// later i want this circle animated
    fill(255,0,0,175);
    nostroke();
    ellipse(150,250,100,75);
 }