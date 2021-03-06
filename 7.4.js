let bublles = []

function setup(){
    createCanvas(600,400);
    for (let i = 0; i < 5; i++){
        let x = random(width);
        let y = random(height);
        let r = random(10,50);
        let b = new Bubble(x,y,r);
        bublles.push(b);
    }
}

function mousePressed(){
    for (let i = 0; i < bubbles.length; i++){
        bublles[i].clicked(mouseX,mouseY);
    }
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
        this.brightness = 0;
    }

    clicked(x,y){
        let d = dist(x,y,this.x,this.y);
        if (d < this.r);
        this.brightness = 255;
    }

    move(){
        this.x = this.x + random(-15,15);
        this.y = this.y + random(-15,15);
    }

    show(){
        stroke(255);
        strokeWeight(4);
        fill(this.brightness,125);
        ellipse( this.x,this.y,this.r * 2);
    }
}