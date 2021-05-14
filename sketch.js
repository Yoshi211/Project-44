var bg,bg2,form,code,security,system;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg1 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();
  console.log(score);
  // Add code to display score in the middle of the screen


  // Add code to display the end screen
  if(score === 3){
    clear();
    background(bg1)
    fill("white")
    textSize(45)
    text("Treasure Unlocked!", 100,270)
  }

  drawSprites()
}