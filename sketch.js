const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain;
var ball;
var hexImg;
var score = 0;

function preload() {

  getTime();
  hexImg = loadImage("polygon.png");
  backgroundImg = loadImage("Day.jpg")

}

function setup() {

  createCanvas(1100,500);
  engine = Engine.create();
  world = engine.world;

  
  strokeWeight(2);
  

  block1 = new Block(600, 260, 30,40);
  block2 = new Block(570, 260, 30,40);
  block3 = new Block(540, 260, 30,40);
  block4 = new Block(630, 260, 30,40);
  block5 = new Block(660, 260, 30,40);
  block6 = new Block(585, 220, 30,40);
  block7 = new Block(555, 220,30,40);
  block8 = new Block(615, 220, 30,40);
  block9 = new Block(645, 220, 30,40);
  bolck10 = new Block(600, 170, 30,40);
  block11 = new Block(570, 180, 30,40);
  block12 = new Block(630, 180,30,40);
  block13 = new Block(600, 140,30,40);
  block14 = new Block(900, 170, 30,40);
  block15 = new Block(930, 170, 30,40);
  block16 = new Block(870, 170, 30,40);
  block17 = new Block(840, 170, 30,40);
  block18 = new Block(960, 170, 30,40);
  block19 = new Block(900, 140, 30,40);
  block20 = new Block(930, 140,30,40);
  block21 = new Block(870, 140, 30,40);
  block22 = new Block(900, 110, 30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 500, 1500, 20);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:150, y:160});

}

function draw() {

  if(backgroundImg)
  background(backgroundImg);
  textSize(20);
  fill("lightyellow");
  text("SCORE : "+score,750,40);
    

  Engine.update(engine);

  

  fill("rgb(127,127,127)");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("rgb(62.222,206)");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("rgb(254,192,202)");
  bolck10.display();
  block11.display();
  block12.display();

  fill("rgb(90.150,171)");
  block13.display();

  fill("rgb(62.222,206)");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("rgb(254,192,202)");
  block19.display();
  block20.display();
  block21.display();

  fill("rgb(90.150,171)");
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  bolck10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  chain.fly();
}

function keyPressed() {
if (keyCode === 32){
   chain.attach(this.ball)
 }
}

async function getTime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata") 
  var infoType = await response.json(); 
  console.log(infoType) 
  var dateTime = infoType.datetime; 
  console.log(dateTime)
  var hour = dateTime.slice(11,16) 
  console.log(hour)

if (hour >= 06 && hour <= 19){
bg  = "Day.jpg"

}
else {
  bg  = "Night.jpg"


}

backgroundImg = loadImage(bg)
console.log(backgroundImg)



}

