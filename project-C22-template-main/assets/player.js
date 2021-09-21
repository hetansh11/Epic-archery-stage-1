class player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.PlayerImage=loadImage("assets/player.png")
      this.PlayerImage2=loadImage("assets/playerArcher.png")
    }
    display(){
      push ()
      translate(this.x,this.y)
      rotate(this.angle)
      imageMode(CENTER)
      image (this.PlayerImage,200,350,180,150)
      pop()
      image (this.PlayerImage2,250,160,50,180)
    }
  }
  