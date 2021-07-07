image ="";

function preload(){
    img = loadImage("couch.jpeg");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(425,125);
}

function draw(){
    image(img,0,0,600,450);
    noFill();
    stroke("#FF0000");
    rect(35,175,500,250);
    text("Couch",45,195);

    
}
