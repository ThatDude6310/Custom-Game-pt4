class Bullet {
    constructor(tempOwner) {
      this.owner = tempOwner;
      this.location = createVector(this.owner.x, this.owner.y); // Copy it so we don't modify the original owner's location
      this.breadth = 50;
     /* this.speed = 15.0;
      this.damage = 1;
      this.trajectory = p5.Vector.sub({mouseX, mouseY}, this.owner);
      this.trajectory.normalize();
      this.trajectory.mult(this.speed);*/
    
    }
  
    
    travel() {
      this.location.add(this.trajectory);
    }
  
    stillAlive() {
      
      if (
        this.location.y > height ||
        this.location.y < 0 ||
        this.location.x > width ||
        this.location.x < 0
      ) {
        this.destroy();
      }
    }
  
    
    destroy() {
      theBullets.remove(this);
    }
  
    
    update() {
      this.travel();
      this.stillAlive();
    }
  
    display() {
      push();
      imageMode(CENTER);
      image(bulletImg,this.location.x, this.location.y, this.breadth, this.breadth);
      pop();
    }
  }