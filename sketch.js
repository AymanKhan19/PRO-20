var bg, bgImg
var cat
var mouse

function preload() {
    //load the images here
  bg = loadImage('images/garden.png');

  catImg1 = loadAnimation('images/cat1.png');
  catImg2 = loadAnimation('images/cat2.png', 'images/cat3.png');
  catImg3 = loadAnimation('images/cat4.png');

  mouseImg1 = loadAnimation('images/mouse1.png');
  mouseImg2 = loadAnimation('images/mouse2.png', 'images/mouse3.png');
  mouseImg3 = loadAnimation('images/mouse4.png');



}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat = createSprite(700, 550)
    cat.addAnimation('cat', catImg1)
    cat.scale = 0.2 

    mouse = createSprite(300, 550);
    mouse.addAnimation('mouse', mouseImg1);
    mouse.scale = 0.1

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x <(cat.width - mouse.width)/2){

      cat.velocityX = 0;
      cat.addAnimation('lastAnimation', catImg3);
      cat.changeAnimation('lastAnimation')
      cat.x = 350;
      cat.scale = 0.2

      mouse.addAnimation('happyMouse', mouseImg3);
      mouse.changeAnimation('happyMouse');
      mouse.scale = 0.1
     }
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
   
    mouse.addAnimation('mouseTeasing', mouseImg2);
    mouse.changeAnimation('mouseTeasing');
    mouse.frameDelay = 25;

    cat.addAnimation('catRunning', catImg2);
    cat.changeAnimation('catRunning');
    cat.velocityX = -3
    
  }

  

  //For moving and changing animation write code here


}
