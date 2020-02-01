let bubble1;
let bubble2;

function setup(){
    createCanvas(600,400);
    bubble1 = new Bubble(200,200,40);
    bubble2 = new Bubble(400,200,20);
}

function draw(){
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
}

class Bubble{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    move(){
        this.x = this.x + random(-15,15);
        this.y = this.y + random(-15,15);
    }

    show(){
        stroke(255);
        strokeWeight(4);
        fill(255,0,100,50);
        ellipse( this.x,this.y,this.r * 2)
    }
}