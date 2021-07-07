image ="";

function preload(){
    img = loadImage("desk.jpg");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(425,125);
}

function draw(){
    image(img,0,0,600,450);
    noFill();
    stroke("#FF0000");
    rect(0,0,600,450);
    text("Desk",20,25);

  
}
