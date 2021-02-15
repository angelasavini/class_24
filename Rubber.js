class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }
      this.x = x
      this.y = y
      this.r = r
      this.body = Bodies.circle(x, y, (this.r-20)/2, options);
      //this.width = width;
      //this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("blue")
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };