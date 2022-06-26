class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.bulletx = 0
        this.bullety = 0
        this.distancex = 0
        this.distancey = 0
        this.xx = 0
        this.yy = 0
        
       
        
        this.player = createSprite(this.x,this.y)
        this.player.debug = true
    }

    display(){
        rectMode(CENTER)
        //this.rect = rect(this.x,this.y,20,20)
        
        this.player.addImage(playerImg)
        this.player.scale = 0.45
    }

    move(){
        if(keyDown("w")){
            this.y -= 5
            this.player.y = this.y
    
        }
        if(keyDown("a")){
            this.x -= 5
            this.player.x = this.x
    
        }
        if(keyDown("d")){
            this.x += 5
            this.player.x = this.x
    
        }
        if(keyDown("s")){
            this.y += 5
            this.player.y = this.y
    
            
        }

        
            

        
    }

   is_collision(zombie){
       if(zombie.isTouching(this.sprite)){
        console.log("touched")
       }

   }
}