const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stoneobj;
var launcherobj;
var treeobj;
var boy;
var mango1,mango2,mango3;
var mango4,mango5,mango6;
var mango7,mango8,mango9;
function preload()
{
	boy=loadImage("boy.png");
	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	mango1= new Mango(1100,100,30);
	mango2= new Mango(1190,150,50);
	mango3= new Mango(2100,200,70);
	mango4= new Mango(2190,250,90);
	mango5= new Mango(2200,300,120);
	mango6= new Mango(3000,350,140);
	mango7= new Mango(3500,400,160);
	mango8= new Mango(4000,500,180);
	mango9= new Mango(4500,550,200);
	

stoneobj=new Stone(100,300,50);

launcherobj=new launcher(stoneObj.body,{x:235,y:420})

treeobj=new Tree(1050,580);









	Engine.run(engine);
  
}


function draw() {
	 Engine.update(engine)
	 image(boy ,200,340,200,300);
  rectMode(CENTER);
  background(0);

detectollision(stoneobj,mango1);
detectollision(stoneobj,mango2);
detectollision(stoneobj,mango3);
detectollision(stoneobj,mango4);
detectollision(stoneobj,mango5);
detectollision(stoneobj,mango6);
detectollision(stoneobj,mango7);
detectollision(stoneobj,mango8);
detectollision(stoneobj,mango9);





  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango9.display();
  mango8.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneobj.body,{x:235, y:420})
		launcherobj.attach(stoneobj.body);
	}
}
function detectollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<-lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body,false);
  }

}


