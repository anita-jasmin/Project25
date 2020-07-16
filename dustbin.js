class dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("sprites/dustbingreen.png");
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
      image(this.image,625,570,150,160)
    }
  }
  