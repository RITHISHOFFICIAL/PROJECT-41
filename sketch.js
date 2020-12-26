const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;


var drops;
var maxDrops=100;
drops=[];
function preload(){
    
}

function setup(){
  var canvas= createCanvas(400,600);
  
  engine=Engine.create();
  world=engine.world;
    
}

function draw(){
    background("black");
   
for(var i=0;i<maxDrops;i++){
    drops.push(new Drop(random(0,400),random(0,400)));
}
   drawSprites();
}   

