
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bal;
var ground;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
var baloptions = {
  restitution:1.05,
  frictionAir:0.00000000000000000000000000001
}

bal = Bodies.circle(100,20,20,baloptions)
World.add(world,bal)
var groundOptions = {
  isStatic:true
}
ground = Bodies.rectangle(200,420,400,20,groundOptions)
World.add(world,ground)
}

function draw() 
{
  background(51);
 Engine.update(engine)
 ellipse(bal.position.x,bal.position.y,20)
rect(ground.position.x,ground.position.y,400,20)
}

