let bublles = []

function setup(){
    createCanvas(600,400)
}

function mousePressed(){
    let r = random(10,50);
    let b = new Bubble(mouseX,mouseY,r);
    bublles.push(b);
}

function draw(){
    background(0);
    for (let i = 0; i < bubbles.length; i++){
        bublles[i].move();
        bublles[i].show();
    }
}

class Bubble {
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
        noFill();
        ellipse( this.x,this.y,this.r * 2)
    }
}