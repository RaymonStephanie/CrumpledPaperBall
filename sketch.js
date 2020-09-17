const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumple, ground1, block1, box1, box2;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	crumple = new Paper(100,650);
	ground1 = new ground(400,700,800,50);
	block1 = new Block(560,665,140,20);
	box1 = new box(500,20,300);
	box2 = new box(750,20,300);
	Engine.run(engine);
	console.log(Paper);
}

function draw() {
	rectMode(CENTER);
	imageMode(CENTER);
	background("white");
	crumple.display();
	ground1.display();
	block1.display();
	box1.display();
	box2.display();
	drawSprites();
	keyPressed();
}

function keyPressed() 
{
	if(keyDown("UP_ARROW")) 
	{
		Matter.Body.applyForce(crumple.body, { x: crumple.body.position.x, y: crumple.body.position.y}, { x: 23, y: -55 });
	}
}