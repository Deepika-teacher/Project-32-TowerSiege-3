class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.2,
          'friction':1.0,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y,30,40, options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
      this.visibility=255;
    }
    display(){
      var angle = this.body.angle;

      if(this.body.speed<3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0,this.width,this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility -= 5;
        pop();
      }
    }

    score(){
      if(this.visibility<0 && this.visibility>-100){
        score++;
        console.log(score)
      }
    }
}