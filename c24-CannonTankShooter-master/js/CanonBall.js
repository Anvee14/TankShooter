class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   0.5,
      "friction" : 1.5,
      "restitution" : 0.5,
      "frictionAir":0.06,
      
    }
    this.width = 20;
    this.height = 20;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)

    this.ballImage = loadImage('assets/ball.png');
    World.add(world, this.body);
    //console.log(this.body);
  };

  display(){
    if(flag === "launch"){
      var pos = this.body.position;
      var angle = this.body.angle

      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER)
      image(this.ballImage,0, 0, this.width, this.height);
      pop();
   }
  };
};
