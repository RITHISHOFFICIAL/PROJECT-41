class Drop{
    constructor(x,y){
      var options={
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
          
      }
      this.body=Bodies.circle(x,y,options);
      World.add(world,this.body);
    }
      
    display(){
        ellipse(x,y,5,5);
    }
    

    
}