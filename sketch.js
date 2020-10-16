
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var tree;
var boy, boyImg;
var ground;

function preload()
{
	boyImg = loadImage("Images/boy.png");
	treeImg = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(windowWidth, 695);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 600, 20, 20);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	tree = createSprite(1090, 440, 150, 150);
	tree.addImage(treeImg);
	tree.scale = 0.4;

	ground = new Ground(width/2, 700, width, 60);
	World.add(world, ground);

	stone = new Stone(125, 525, 40);
	World.add(world, stone);

	mango1 = new Mango(1100, 345, 40);
	mango2 = new Mango(970, 380, 40);
	mango3 = new Mango(1240, 370, 40);
	mango4 = new Mango(1170, 310, 40);
	mango5 = new Mango(1050, 320, 40);
	mango6 = new Mango(1100, 280, 40);
	mango7 = new Mango(1040, 380, 40);
	mango8 = new Mango(1160, 370, 40);
	mango9 = new Mango(1030, 240, 40);
	mango10 = new Mango(1220, 300, 40);
	mango11 = new Mango(920, 340, 40);
	mango12 = new Mango(1120, 220, 40);
	mango13 = new Mango(1000, 320, 40);

	constraint = new Sling(stone.body, {x: 150, y: 540});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  constraint.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);
  detectcollision(stone, mango11);
  detectcollision(stone, mango12);
  detectcollision(stone, mango13);

  textSize(20);
  fill(0);
  text("Press SPACE (32) to carry the stone again!", 100, 100);

}


function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}


function mouseReleased() {
    constraint.fly();
}

function keyPressed() {
	if (keyCode === 32) 
	{
		Matter.Body.setPosition(stone.body, {x: 125, y: 525});
		constraint.attach(stone.body);
	}
}

function detectcollision(stone, mango) 
{
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=mango.radius+stone.radius)
	  {
		  Matter.Body.setStatic(mango.body,false);
	  }
  
}
