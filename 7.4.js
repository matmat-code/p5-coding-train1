let bublles = []

function setup(){
    createCanvas(600,400);
    let x = random(width);
    let y = random(height);
    let r = random(10,50);
    let b = new Bubble(x,y,r);
    bublles.push(b);
}

function mousePressed(){
    for (let i = 0; i < bubbles.length; i++){
        bublles[i].move();
        bublles[i].show();
    }
}

function draw(){
    background(0);
    bubble.move();
    bubble.show();
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

    clicked(){
        let d = dist(mouseX,mouseY,this.x,this.y);
        if (d < this.r);
        console.log("CLICKED ON BUBBLE");
    }

    move(){
        this.x = this.x + random(-15,15);
        this.y = this.y + random(-15,15);
    }

    show(){
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse( this.x,this.y,this.r * 2);
    }
}