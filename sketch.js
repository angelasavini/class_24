var hammer1, stone1, rubber1, ground, iron1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sand1, sand2, sand3, sand4, sand5, sand6, sand7;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown")

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	

 	boxPosition=width/2-100
 	boxY=610;

	//Create the Bodies Here.
hammer1 = new Hammer(200,20,100,30)
stone1 = new Stone(400,20,60,70)
rubber1 = new Rubber(200,20,40)
iron1= new Iron(250,40,100,40)

sand1 = new Sand(300,20,10)
sand2 = new Sand(300,20,10)
sand3 = new Sand(300,20,10)
sand4 = new Sand(300,20,10)
sand5 = new Sand(300,20,10)
sand6 = new Sand(300,20,10)
sand7 = new Sand(300,20,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  hammer1.display();
  stone1.display();
  rubber1.display();
  iron1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  
  drawSprites();
 
}



