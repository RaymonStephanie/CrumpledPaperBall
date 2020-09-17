class Block extends Baseclass{
    
    constructor(x,y) 
    {
        super(x,y);
        this.image = loadImage("sprites/dustbingreen.png");
    }

    display() 
    {
        imageMode(CENTER);
        image(this.image,630,510,this.width,this.height);
    }
}