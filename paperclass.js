class Paper extends Baseclass {
    constructor(x,y) {
        super(x,y,70,70);
        this.image = loadImage("sprites/paper.png");
    }
    display() {
      super.display();
      //ellipse(this.body.position.x,this.position.y,this.width,this.height);
    }
}