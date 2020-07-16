
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ball,db,db1;
function preload()
{
	
	
}

function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 5 , {isStatic:true} );
	 World.add(world, ground);
	 
	
	db=new dustbin(700,570,10,150);
	db1=new dustbin(550,570,10,150);
	db2=new dustbin(625,650,160,10);
	ball=new paper(200,645,20,PI/2);
	//point=new launcher(ball.body,{x:200,y:50});


	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
 
  background("grey");
  ellipseMode(RADIUS);
  rectMode(CENTER);
  
 
  db2.display();
  db.display();
  db1.display();
  ball.display();
  rect(ground.position.x,ground.position.y,width,10);
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:45,y:-85})
	}
}




