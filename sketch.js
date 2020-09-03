var mapNumber, gameMap;
var playerCount, player, allPlayers;
var menu;
var game;
var gameState = 0;
var player1, player2, player3, player4, player5, player6;
var players;
var randPlayer;
var database;
var canvas;
var book, book2, book3, book4, book5, book6;
var picture, picture2, picture3;
var lamp;
var box;
var lionToy;
var ball;
var pencil, pencil2, pencil3;
var mug;
var toDoList, test, poster;
var pillow1, pillow2, pinkPillow;
var plant;
var skateboard;
var basketBallHoop;
var orangeBall, orangeBall2, orangeBall3;
var toyCar;
var cone;
var shovel;
var bucket1, bucket2;
var playgroundBall;
var football;
var wagon;
var trafficCone;
var player1 = "player1";
var player2 = "player2";
var player3 = "player3";
var player4 = "player4"
var player5 = "player5";
var player6 = "player6";
var playground;
var bedroom;
var numPlayersPlay = 0
var numPlayersBed = 0;
var playgroundImg, playgroundHoverImg, bedroomImg, bedroomHoverImg;
var seekerClicks = 0;
var seekerWon;
var hiderCaught;
var mainSong, houseSong, playSong;
var mainMenuBG;
var congratulate;
var hintButton;

function preload(){
    playgroundImg = loadImage("images/Playground.PNG");
    playgroundHoverImg = loadImage("images/PlaygroundHover.PNG");
    bedroomImg = loadImage("images/Bedroom.PNG");
    bedroomHoverImg = loadImage("images/BedroomHover.PNG");
    mainMenuBG = loadImage("images/MainMenuBG.png");

    //mainSong = loadSound("sounds/MainMenuSong.mp3");
}

function setup() {
    canvas = createCanvas(displayWidth - 10, displayHeight - 10);
    database = firebase.database();
    // mapNumber = Math.round(Math.random());
    game = new Game();
    game.getGameState();
    game.start();

    gameMap = new GameMap();


}

function draw() {

    if (gameState === 0) {
        //mainSong.play()
    }
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
}

function mouseClicked() {
    game.playerClick();  

    if (player.role === "Seeker") {
        seekerClicks++;
    }

    console.log(seekerClicks);
}
