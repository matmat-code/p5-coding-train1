let bubble1;
let bubble2;

function setup(){
     createCanvas(600,400);
     bubble1 = new Bubble(200,200)
     bubble1 = new Bubble(300,200,100)
}

function draw(){
    background(0);

    if (bubble1.intersects(bubble2)){
        background(200,0,100) 
    }

    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move(); 

}

class Bubble {
    constructor(x,y,r=50){
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    intersects(other){
        let d = dist(bubble1.x,bubble1.y,bubble2.x,bubble2.y,)
        if(d < bublle1.r + bublle2.r){  
        return true;
    }
    }

    changeCollor(bright){
        this.brightness = bright
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