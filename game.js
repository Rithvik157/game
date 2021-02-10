class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }
    updateState(state){
        database.ref("/").update({
            "gameState" : state
        })
    }
    start(){
        if(gameState === 0){
            form = new Form()
            form.display()
            player = new Player()
            player.getCount()
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
    }
    play(){
        form.hide()
        //textSize(30)
        //text("Game Started",250,50)
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
        var index = 0;
        var x = 0;
        var y = 0;    
       // var YPosition = 130
        for (var plr in allPlayers){
            index ++
            x += 200
            y = displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index === player.index){
                //fill("red")
                cars[index-1].shapeColor="red"
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y
            }else{
                //fill("black")
                cars[index-1].shapeColor="black"
            }
           // YPosition+= 20
           //textSize(20);
           //text(allPlayers[plr].name+":"+allPlayers[plr].distance,130,YPosition)
        }
        }
        if(keyDown(UP_ARROW)&&player.index!==null){
            player.distance+=20
            player.update()
            if (keyDown(LEFT_ARROW)){
                player.x = player.x-15
            }
            if(keyDown(RIGHT_ARROW)){
                player.x = player.x + 15
            }

        }
        drawSprites();
    }
}
