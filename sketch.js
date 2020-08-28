var mapNumber, gameMap;
var playerCount, player, allPlayers;
var menu;
var game;
var gameState = 0;
var player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20;
var players;
var randPlayer;
var database;


function preload(){

}

function setup() {
    var canvas = createCanvas(displayWidth - 10, displayHeight - 10);
    database = firebase.database();
    // mapNumber = Math.round(Math.random() * Math.floor(4));
    game = new Game();
    game.getGameState();
    game.start();
}

function draw() {
    
    if (playerCount === 2 && gameState != 2) {
        game.updateGameState(1);
    }

    if (gameState === 1) {
        clear();
        game.play();
    }

    if (gameState === 2) {
        game.end();
    }

    function touchStarted() {
        console.log("Hi");
    }

}

