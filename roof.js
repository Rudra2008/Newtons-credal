class Roof{
    constructor(){
        var option={
            isStatic:true
          }
          ground=Bodies.rectangle(400,50,400,25,option);
          World.add(world,ground);
    }
    display(){
        rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,25)
    }
}