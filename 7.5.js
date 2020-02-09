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
    for (let i = bubbles.length-1; i >= 0; i--)
        if (bubbles[i].contains(mouseX,mouseY)){
            bubbles.splice(i,1);
    }
}

function draw(){
    background(0);
    for (let i = 0; i < bubbles.length; i++){
        if (bubbles[i].roleover(mouseX,mouseY)){
            bubbles[i].changeCollor(255);
            }else{
                bubbles[i].changeCollor(0);
            }

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

    changeCollor(bright){
        this.brightness = bright
    }

    roleover(px,py){
        let d = dist(px,py,this.x,this.y);
        if (d < this.r) {
            return true;
        }  else {
            return false;
        }
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