image ="";

function preload(){
    img = loadImage("bedroom.jpeg");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(425,125);
}

function draw(){
    image(img,0,0,600,450);
    noFill();
    stroke("#FF0000");
    rect(30,30,540,400);
    text("Bedroom",40,50);
}
