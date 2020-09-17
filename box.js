class box {
    constructor(x,width,height) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,530,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        noStroke();
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
}