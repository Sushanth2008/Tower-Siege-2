const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

function preload(){

background1=loadImage("background.png")

hexagon1 = loadImage("hexagon1.png");

}

function setup() {
  createCanvas(1366,625);
   
  engine = Engine.create();
  world=engine.world;

  var options = {
    'restitution':0.8,
    'friction':1
}
  hexagon=Bodies.circle(100,270,20)
  World.add(world,hexagon)

  orange1=new Block(465,330,30,30,"orange",2)
  orange2=new Block(495,330,30,30,"orange",2)
  orange3=new Block(525,330,30,30,"orange",2)
  orange4=new Block(555,330,30,30,"orange",2)
  orange5=new Block(585,330,30,30,"orange",2)
  orange6=new Block(615,330,30,30,"orange",2)
  green1=new Block(585,300,30,30,"green",2)
  green2=new Block(555,300,30,30,"green",2)
  green3=new Block(525,300,30,30,"green",2)
  green4=new Block(495,300,30,30,"green",2)
  yellow1=new Block(525,270,30,30,"yellow",2)
  yellow2=new Block(555,270,30,30,"yellow",2)
  blue=new Block(540,240,30,30,"blue",2)

  orange1a=new Block(1050,380,30,30,"orange",2)
  orange2a=new Block(1080,380,30,30,"orange",2)
  orange3a=new Block(1110,380,30,30,"orange",2)
  orange4a=new Block(1140,380,30,30,"orange",2)
  yellow1a=new Block(1080,350,30,30,"yellow",2)
  yellow2a=new Block(1110,350,30,30,"yellow",2)
  green1a=new Block(1095,320,30,30,"green",2)

  rope=new Rope(this.hexagon,{x:100,y:250})

  ground=new Ground(800,615,3000,20)
  line1=new Ground(540,350,300,10)
  line2=new Ground(1100,400,250,10)

  Engine.run(engine);

}

function draw() {
  background(background1); 
  
  orange1.display()
  orange2.display()
  orange3.display()
  orange4.display()
  orange5.display()
  orange6.display()
  green1.display()
  green2.display()
  green3.display()
  green4.display()
  yellow1.display()
  yellow2.display()
  blue.display()

  orange1a.display()
  orange2a.display()
  orange3a.display()
  orange4a.display()
  yellow1a.display()
  yellow2a.display()
  green1a.display()

  rope.display()

  ground.display()

  line1.display()
  line2.display()

  imageMode (CENTER);
  image(hexagon1,hexagon.position.x,hexagon.position.y,40,40)

  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(this.hexagon,{x:mouseX,y:mouseY})  
}

function mouseReleased(){
rope.fly()  
}


  function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(this.hexagon,{x:100,y:270});
    rope.attach(this.hexagon);
  }
 }
