var nums = [100,25,46,72];


function setup(){
    createCanvas(500,400);
}

function draw(){
    background(0);

    for (var i = 0;i < 4;i++){
        stroke(255);
        fill(51);
        ellipse(1 * 100 + 100,200,nums[i],nums[i]);
    }

}