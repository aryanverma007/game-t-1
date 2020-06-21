class Enemy{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.shapeColor = "red";
        this.health = 100;
        
        
    }
    
}