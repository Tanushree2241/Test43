var database , game1 , gameState = 0 , playerCount , form1 , player1, allPlayers , car1 , car2 , car3 , car4 , cars; 

function setup(){
    createCanvas(displayWidth-50,displayHeight-50);
    database = firebase.database();
    game1 = new game();
     game1.gameState();
     game1.start();
}

function draw(){
    background("white");
    if(playerCount === 4) {
        game1.update(1);    
    }
    
   if(gameState === 1) {
       game1.play();
   } 
}


