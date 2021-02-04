class Bob {  
    constructor(x, y, radius){
        var options = {
            'isStatic':false,
            'restitution':1,
            'friction':0,
            'density':0.5
        }
    
        this.body = Bodies.circle(x, y, radius, options);

        World.add(world, this.body);

        this.radius = radius
       
        
   }
   display(){

    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius);
    
    /*imageMode(CENTER);
    image(this.image,pos.x,pos.y,50,50);
*/
   }
}
