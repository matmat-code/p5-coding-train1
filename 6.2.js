let baubble;

function setup(){
    createCanvas(600,400);
    bubble = new Bubble();
}

function draw(){
    background(0);
    bubble.move();
}


class Bubble {
    constructor(){
        this.x = 200;
        this.y = 150;
    }
move(){
    bubble.x = bubble.x + random(-5,5);
    bubble.y = bubble.y + random(-5,5);
}


}