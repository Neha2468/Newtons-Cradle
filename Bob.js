class Bob{

    constructor(x,y) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':7.8,
            'isStatic': false
        }

        this.body = Bodies.circle(x,y,25,options);
   
        World.add(world,this.body);

        console.log(this.body)
    }
    display(){
         push();
         fill("#DA1EFF");
         ellipseMode(RADIUS);
         ellipse(this.body.position.x, this.body.position.y, 25,25);
         pop();
        
    }
     
}