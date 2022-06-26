class Gun {
    
    constructor(owner) {
      this.owner = owner
      //this.firing = false;
      
      
    }
  
  
    fire() {
      //this.firing = true;      
        //if (this.firing) {
          theBullets.push(new Bullet(this.owner));
          console.log("firing")
       // }
        this.firing = false;
      }
    }
