
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,ball,stone;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
	hammer = new Hammer(50,50,60,40);
	ball1 = new Ball(300,590,20,20);
  ball2 = new Ball(310,590,20,20);
  ball3 = new Ball(320,590,20,20);
  ball4 = new Ball(330,590,20,20);
  ball5 = new Ball(360,590,20,20);
  stone = new Stone(160,500,70,70);
  brick  =new Brick(520,590,80,90);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightBlue');
  Engine.update(engine);

  hammer.display();
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  stone.display();
  brick.display();
  
  drawSprites();
 
}



