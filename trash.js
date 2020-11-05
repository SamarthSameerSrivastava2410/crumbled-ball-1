class Ball{
    constructor(){
        var options = {
            
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        
        this.x = 100;
        this.y = 645;

        this.paper = Bodies.circle(this.x, this.y, 5, options);

        World.add(world, this.paper);
    }
}

