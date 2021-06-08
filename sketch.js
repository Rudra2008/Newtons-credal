
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,engine,world;
var ball1,ball2,ball3,ball4,ball5;
var rope
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
      roof=new Roof()
	  ball1=new Ball(400,300)
	  rope=new Rope(ball1.body,roof.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball1.display();
  rope.display();
  roof.display();
}



