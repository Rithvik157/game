var  database;
var playerCount = 0
var car1,car2,car3,car4,cars

var gameState = 0;

var form,player,game,allPlayers

function setup(){
  database = firebase.database();
  console.log(database);
 var canvas = createCanvas(displayWidth-100,displayHeight-200);
 canvas.position(50,50)
 game = new Game()
  game.getState()
  game.start()


  }

function draw(){
  background("white");
  if(playerCount===4){
    game.updateState(1)
  }
    if(gameState === 1){
      clear()
      game.play()
    }
  
}

