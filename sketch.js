var fixed, moving;
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(100, 150, 20, 40)
  fixed.debug = true;
  moving.debug = true;
  fixed.shapeColor = "red"
  moving.shapeColor = "red"
}

function draw() {
  background("blue");  
  if(fixed.x - moving.x < fixed.width/2 + moving.width/2 && moving.x - fixed.x < moving.width/2 + fixed.width/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2 && moving.y - fixed.y < moving.height/2 + fixed.height/2){
    fixed.shapeColor = "yellow"
    moving.shapeColor = "yellow"
  }
  else{
    fixed.shapeColor = "green"
    moving.shapeColor = "green"
  }
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  drawSprites();
}