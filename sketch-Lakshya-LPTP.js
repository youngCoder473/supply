var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	box = new Box(2,655,10,10);
	boxOne = new BoxOne(350,623,10,10);
	boxTwo = new BoxOne(450,623,10,10)

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

 

//	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true,restitution:.7});
	//World.add(world, packageBody);

	//boxOneBody= Bodies.rectangle(width/2,655,750,10,{isStatic:true});
	//World.add(world,boxOneBody);

	//boxTwoBody=Bodies.rectangle(350,623,10,75,{isStatic:true});
	//World.add(world,boxTwoBody);

	//boxThreeBody=Bodies.rectangle(450,623,10,75,{isStatic:true});
//	World.add(world,boxThreeBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  drawSprites();
 // onePos= boxOneBody.position;
	//rectMode(CENTER);
	//fill("red");
	//rect(onePos.x,onePos.y,100,10);

	//twoPos= boxTwoBody.position;
	//rectMode(CENTER);
	//fill("red");
	//rect(twoPos.x,twoPos.y,10,75);

	//threePos= boxThreeBody.position;
	//rectMode(CENTER);
	//fill("red");
	//rect(threePos.x,threePos.y,10,75);
	box.display();
	boxOne.display();
	boxTwo.display();
	Engine.update(engine);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
    
  }
}



