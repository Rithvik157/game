class Form{
    constructor(){
      this.title = createElement("h1")
      this.input = createInput().attribute("placeHolder","playerName")
      this.button = createButton("Enter")
      this.greeting = createElement("h2")
      this.resetButton = createButton("reset")
    }
    hide(){
      this.input.hide();
      this.title.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
        this.title.html("Race With Me")
        this.title.position(displayWidth/2 - 65,displayHeight/4 - 50)
        this.input.position(displayWidth/2 - 65,displayHeight/4 + 35)
        this.button.position(displayWidth/2 , displayHeight/4 + 80);
        this.resetButton.position(displayWidth - 100 , displayHeight / 2 -320)
        this.button.mousePressed( ()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
          playerCount = playerCount + 1;
        player.index = playerCount
          player.update()
          player.updateCount(playerCount)
        this.greeting.html("Hello"+player.name)
        this.greeting.position(displayWidth/2 , displayHeight/2 - 200)
        })
        this.resetButton.mousePressed( ()=>{
          player.updateCount(0)
          game.updateState(0);
          window.location.reload()
        }

        )
    }
}
