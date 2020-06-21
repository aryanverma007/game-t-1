var fixedrect , movingrect,body1,body2 ;
var playerhouse   , robo1 ,energy = 0, enehouse  ,rect  ,gameState = "start",player1group  ,enemy1group    ;
var enemy1health = [],ehealth =100,phealth =100   ;

function setup() {
  createCanvas(1000,600);
  playerhouse = createSprite(100, 300,50,400);
  player1group = new Group();
  enemy1group = new Group();
}


function draw() { 
story();

if(keyDown("y")){
  gameState = "play";
}
if(gameState === "play"){
  background(0);
  createpath();    
  enehouse1 = new Enemy (900, 300,50,400);
  robos();
  spawnenemy();
  createEnergy();
  /*healthforene();
  healthforepla();*/
  fight();
  drawSprites();
  swpaningins();
  kuchbi();
  text("playerhealth:"+phealth,50,50);
  text("enemyhealth:"+ehealth,150,50);
}}


  /*
function healthforene(){
  if(enemy1.health  <= 0  ){
    enemy1roup.destroy();
  }}

function healthforplayer(){
  if(player1.health  <= 0  ){
    player1.destroy();
  }
}*/