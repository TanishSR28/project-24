
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("red")
	paper1 = new Paper(60,670);
	ground = new Ground(width/2,680,width,10);
	
	fill("red")
	b1 = new Box((width/2)+200,height-35,200,20);
	b2 = new Box((width/2)+100,height-70,20,100);
	b3 = new Box((width/2)+300,height-70,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	}
}


