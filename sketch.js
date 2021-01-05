const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


   
    ball1 = new  Ball(200,200,80,80);
    ball2 = new  Ball(300,200,80,80);
    ball3 = new  Ball(200,200,80,80);
    ball4 = new  Ball(300,200,80,80);
    ball5 = new  Ball(200,200,80,80);

    rope1 = new Rope(ball1.body,{x:500,y:100});
    rope2 = new Rope(ball2.body,{x:600,y:100});
    rope3 = new Rope(ball3.body,{x:700,y:100});
    rope4 = new Rope(ball4.body,{x:400,y:100});
    rope5 = new Rope(ball5.body,{x:300,y:100});
   
   
    
}

function draw(){
   background(0);
   Engine.update(engine)
     


      ball1.display();
      rope1.display();
      ball2.display();
      rope2.display();
      ball3.display();
      rope3.display();
      ball4.display();
      rope4.display();
      ball5.display();
      rope5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball3.body,{x:mouseX,y:mouseY})
}
