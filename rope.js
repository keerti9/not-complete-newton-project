class Rope {
constructor(body1, body2, offsetX, offsetY) 
{
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}
        
        
    }
    this.rope=Constraint.create(options)
    World.add(world, this.rope) 
       }
       
     Rope=new rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0)
     Rope=new rope(bobObject2.body, roofObject.body, -bobDiameter*2, 0)
     Rope=new rope(bobObject3.body, roofObject.body, -bobDiameter*2, 0)
     Rope=new rope(bobObject4.body, roofObject.body, -bobDiameter*2, 0)
     Rope=new rope(bobObject5.body, roofObject.body, -bobDiameter*2, 0)
       
      display() {
    var bodyA =this.rope.body1.position
    var bodyB =this.chain.body2.position
    strokeWeight(5);
    line(bodyA.x, body1.y, bodyB.x, body2.y)
       }
   }