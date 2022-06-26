class Zombie{
    constructor(x,y){
        this.sprite = createSprite(x, y, 20, 20)
        this.sprite.addAnimation("sprite",zombieWalk)
        this.sprite.scale = 1.75
        //this.toPlayer()
    this.sprite.debug = true
    

 
    }

    follow(player){
      if(this.sprite.x < player.x && this.sprite.y < player.y){
        this.sprite.velocityX = 2//(mouseX - this.spritee.x)/100
        this.sprite.velocityY = 2//(mouseY - this.spritee.y)/100
  
        }else if(this.sprite.x > player.x && this.sprite.y < player.y){
          this.sprite.velocityX = -1//(mouseX - this.spritee.x)/100
          this.sprite.velocityY = 1//(mouseY - this.spritee.y)/100
        }else if(this.sprite.x < player.x && this.sprite.y > player.y){
          this.sprite.velocityX = 1//(mouseX - this.spritee.x)/100
          this.sprite.velocityY = -1//(mouseY - this.spritee.y)/100
  
        }else if(this.sprite.x > player.x && this.sprite.y > player.y){
          this.sprite.velocityX = -1//(mouseX - this.spritee.x)/100
          this.sprite.velocityY = -1//(mouseY - this.spritee.y)/100
  
        }else if(this.sprite.x == player.x && this.sprite.y > player.y){
            this.sprite.velocityX = 0
            this.sprite.velocityY = -1
        }else if(this.sprite.x == player.x && this.sprite.y < player.y){
          this.sprite.velocityX = 0
          this.sprite.velocityY = 1
      }else if(this.sprite.x > player.x && this.sprite.y == player.y){
        this.sprite.velocityX = -1
        this.sprite.velocityY = 0
    }else if(this.sprite.x < player.x && this.sprite.y == player.y){
      this.sprite.velocityX = 1
      this.sprite.velocityY = 0
  }else{
    this.sprite.velocityX = 0
      this.sprite.velocityY = 0
  }

    }

    isShot(bullet,zombieLife){
      
      if(bullet.isTouching(this.sprite)){
        console.log("destroyed")
        bullet.destroyEach()

          //zombieLife = zombieLife - 1
          //console.log(zombieLife)
        
        //if (zombieLife<1) {
          console.log("hit")
          this.sprite.destroy()
          score = score + 1
        //}
        

      }
    }

    is_touched(player){
      if(player.isTouching(this.sprite)){
        console.log("Touching")
    }
  }
}