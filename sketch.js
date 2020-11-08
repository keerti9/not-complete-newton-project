var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;

var roof;
var rope;
var bob;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bobObject1 = createSprite(10,30,)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  display();
  roof.display();
  rope.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode===32) {
bobObject1.swing(bobObject2.bobObject3.bobObject4.bobObject5);
  }
}



