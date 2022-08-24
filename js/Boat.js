class Boat {

  constructor(x, y, width, height,boatpose) {
    var options = {
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.boatpositon=boatpose
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world,this.body);
    this.image=loadImage ("assets/boat.png")
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    rectMode(CENTER);
   // rect(0, 0, this.width, this.height);
   imageMode(CENTER)
image(this.image,0,this.boatpositon,this.width,this.height)
    pop();
   
  }
}
