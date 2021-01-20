
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobDiameter = 50;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(400,50,800,50);

	bobObject1 = new Bob(50,200,50, 0);
	bobObject2 = new Bob(100,200,50,0);
	bobObject3 = new Bob(150,200,50,0);
	bobObject4 = new Bob(200,200,50,0);
	bobObject5 = new Bob(250,200,50,0);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
	
	rectMode(CENTER);
	background(0);

	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	drawSprites();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -100, y: -200});
	}
}

