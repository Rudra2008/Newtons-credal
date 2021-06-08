class Rope{
    constructor(ball,ground){
        /*this.ofsetx=ofsetx
        this.ofsety=ofsety*/
        var options={
            bodyA:ball,
            bodyB:ground,     
            length:250,
            stiffness:1.2,
            //pointB:{x:this.ofsetx,y:this.ofsety}         
        }
        
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        
        var pointA =this.rope.bodyA.position;
        var pointB =this.rope.bodyB.position;
        /*var xone=pointA.x
        var yone=pointA.y
        var xtwo=pointB.x//+this.ofsetx;
        var ytwo=pointB.y//+this.ofsety;*/
        push()
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}