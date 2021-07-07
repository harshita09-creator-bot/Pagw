image ="";

function preload(){
    img = loadImage("tv.jpeg");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(425,125);
}

function draw(){
    image(img,0,0,600,450);
    noFill();
    stroke("#FF0000");
    rect(115,40,380,330);
    text("TV",125,60);
}
