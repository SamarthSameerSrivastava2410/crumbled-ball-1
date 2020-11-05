
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,side1,side2,bottom;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();	
	world = engine.world;

	ground = createSprite(400, 650, 1000, 10);
	
	box = createSprite(600, 650, 200, 20);
	box.shapeColor = "red";
	  
	side1 = createSprite(700, 610, 20, 100);
	side1.shapeColor = "red";

	side2 = createSprite(500, 610, 20, 100);
	side2.shapeColor = "red";

	ball = new Ball();

	Engine.run(engine);
}

function draw() {	
  background(255, 255, 255);
  drawSprites();
  Engine.update(engine);

  ball.display();
  
  ball.collide(side1);
  ball.collide(side2);
  ball.collide(box);
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85});

	}
}