const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon,slingShot

var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  platform =new Ground (200,350,400,10);
  block1 =new Box (330,235,30,40);
  block2 =new Box (360,235,30,40);
  block3 =new Box (390,235,30,40);
  block4 =new Box (420,235,30,40);
  block5=new Box (450,235,30,40);
  block6 =new Box (360,195,30,40);
  block7 =new Box (390,195,30,40);
  block8 =new Box (420,195,30,40);
  block9 =new Box (390,155,30,40);
  var options={
    restitution:0.3
  }
  polygon=Bodies.circle(50,200,20,options);
  World.add(world,polygon);
  slingShot =new SlingShot(polygon.body,{x:100,y:200})
  
}

function draw() {
  background(0);  
  Engine.update(engine)
 // drawSprites();
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ellipseMode(RADIUS)
  ellipse (polygon.position.x,polygon.position.y,20,20)
  slingShot.display();
}