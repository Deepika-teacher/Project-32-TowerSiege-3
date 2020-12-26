const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stage1,stage2;
var box1,box2,box3,box4,box5,box6,box7;
var hexagonImg,hexagon,sling;
var backgroundValue=0;
var score=0;

function preload(){
    hexagonImg=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stage1 = new Ground(500,400,350,10);
    stage2 = new Ground(900,250,300,10);

    var options={
        density : 1.8,
        restitution : 0.8,
        friction : 1
    }
    hexagon=Bodies.circle(150,320,25,options);
    World.add(world,hexagon);

    //Level 1
    box1=new Box(410,370);
    box2=new Box(440,370);
    box3=new Box(470,370);
    box4=new Box(500,370);
    box5=new Box(530,370);
    box6=new Box(560,370);
    box7=new Box(590,370);

    box8=new Box(440,330);
    box9=new Box(470,330);
    box10=new Box(500,330);
    box11=new Box(530,330);
    box12=new Box(560,330);

    box13=new Box(470,290);
    box14=new Box(500,290);
    box15=new Box(530,290);

    box16=new Box(500,250);

    //Level 2
    box17=new Box(840,240);
    box18=new Box(870,240);
    box19=new Box(900,240);
    box20=new Box(930,240);
    box21=new Box(960,240);

    box22=new Box(870,200);
    box23=new Box(900,200);
    box24=new Box(930,200);

    box25=new Box(900,160);

    sling=new Slingshot(hexagon,{x:150,y:320});
}

function draw(){
    background(backgroundValue);
    Engine.update(engine);

    setBackground();

    stroke(0);
    textSize(50);
    text("Press Space for second chance",200,100);
    text("Drag the polygon to destroy the blogs",width/4,height-100);

    text("Score : "+score,width/2,25);
    push();
    translate(hexagon.position.x,hexagon.position.y);
    rotate(hexagon.angle);
    imageMode(CENTER);
    image(hexagonImg,0,0,50,50);
    pop();

    ground.display();
    stage1.display();
    stage2.display();

    sling.display();
    
    fill("lightgreen");
    box1.display();
    box1.score();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("lightblue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    fill("grey");
    box13.display();
    box14.display();
    box15.display();

    fill("pink");
    box16.display();

    fill("lightblue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    fill("grey");
    box22.display();
    box23.display();
    box24.display();

    fill("pink");
    box25.display();

    
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(hexagon,{x:150,y:320});
        sling.attach(hexagon);
    }
}

async function setBackground(){
    var response =await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson=await response.json();
    var datetime = responseJson.datetime;
    var hour=datetime.slice(11,13);

    if(hour<18 && hour>6){
        backgroundValue=255;
    }
    else{
        backgroundValue=0;
    }
}