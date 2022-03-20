function preload(){

}

function setup(){
 canvas=createCanvas(640,480);
 canvas.position(500,250);
 video=createCapture(VIDEO);
 video.hide();
 tint_color="";
}

function draw(){
image(video,170,100,300,300);
noFill();
rect(30, 25, 550, 45);
fill('black');
circle(45, 50, 70);
noFill();
rect(570, 25, 55, 430);
fill('black');
circle(600, 50, 70);
noFill();
rect(598, 410, -550, 55);
fill('black');
circle(595, 437, 70);
noFill();
rect(20, 25, 55, 430);
fill('black');
circle(45, 50, 70);
circle(50, 437, 70);

}

function take_snapshot(){
    save('Krishna.png');
}