class Ball{
    constructor(x,y){
var options={
    density:1,
    frictionAir:0.005
}
this.ball=Bodies.rectangle(x,y,40,400);
this.width=20
this.height=20
World.add(world,this.ball);
    }
    display(){
        push()
        translate(this.ball.position.x,this.ball.position.y)
        rotate (this.ball.rectangle)
        ellipse(0,0,this.width,this.height)
        pop()
    }

}
