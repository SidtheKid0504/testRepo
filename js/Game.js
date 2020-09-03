class Game {
    constructor() {
        this.hBG = loadImage("images/HBG.png");
        this.pBG = loadImage("images/PBG.png")
        this.pillow1Img = loadImage("images/1HPillow1.PNG");
        this.pillow2Img = loadImage("images/1HPillow2.PNG");
        this.pinkPillowImg = loadImage("images/1HPinkPillow.PNG");
        this.ballImg = loadImage("images/1HBall.PNG");
        this.bookImg = loadImage("images/1HBook1.PNG");
        this.book2Img = loadImage("images/1HBook2.PNG");
        this.book3Img = loadImage("images/1HBook3.PNG");
        this.book4Img = loadImage("images/1HBook4.PNG");
        this.book5Img = loadImage("images/1HBook5.PNG");
        this.book6Img = loadImage("images/1HBook6.PNG");
        this.lionToyImg = loadImage("images/1HLionToy.PNG");
        this.lampImg = loadImage("images/1HLamp.PNG");
        this.plantImg = loadImage("images/1HPlant.PNG");
        this.skateBoardImg = loadImage("images/1HSkateBoard.PNG");
        this.ToDoImg = loadImage("images/1HToDo.PNG");
        this.posterImg = loadImage("images/1HPoster.PNG");
        this.pencilImg = loadImage("images/1HPencil.PNG");
        this.pencil2Img = loadImage("images/1HPencil2.PNG");
        this.pencil3Img = loadImage("images/1HPencil3.PNG");
        this.mugImg = loadImage("images/1HMug.PNG");
        this.picture = loadImage("images/1HPicture.PNG");
        this.picture2 = loadImage("images/1HPicture2.PNG");
        this.picture3 = loadImage("images/1HPicture3.PNG");
        this.boxImg = loadImage("images/1HBox.PNG");
        this.testImg = loadImage("images/1HTest.PNG");
        this.basketBallHoop = loadImage("images/2PBasketBallHoop.PNG");
        this.footballImg = loadImage("images/2PFootball.PNG");
        this.bucketImg1 = loadImage("images/2PBucket.PNG");
        this.bucketImg2 = loadImage("images/2PBucket2.PNG");
        this.toyCarImg = loadImage("images/2PToyCar.PNG");
        this.orangeBallImg = loadImage("images/2POrangeBall.PNG");
        this.trafficConeImg = loadImage("images/2PTrafficCone.PNG");
        this.shovel = loadImage("images/2PShovel.PNG");
        
    }

    getGameState() {
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }

    updateGameState(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getPlayerCount();
                menu = new Menu();
                menu.display();
            }
        }

        players = [player1, player2, player3, player4, player5, player6];
        randPlayer = Math.floor((Math.random() + 1 ));
        
        for (var i in allPlayers) {
            console.log(allPlayers[i].mapChoice);
            if (allPlayers[i].mapChoice === "Playground") {
                numPlayersPlay++;
                console.log(numPlayersPlay);
            } else if (allPlayers[i].mapChoice === "Bedroom") {
                numPlayersBed++;
                console.log(numPlayersBed);
            }

            if (numPlayersBed === 2) {
                gameMap.map = 0;
                gameMap.selectMap(0);
            } else if(numPlayersPlay === 2) {
                gameMap.map = 1;
                gameMap.selectMap(1);
            }
        }
    }

    play() {
        menu.hide();
        Player.getPlayerInfo(); 
        gameMap.getMap();

        if (allPlayers !== undefined) {

            if (gameMap.map === 0) {
                background(this.hBG);

                book = createSprite(displayWidth - 1410, displayHeight/2 + 175, 20, 20);
                book.addImage(this.bookImg);
                book.scale = 0.5;

                book2 = createSprite(displayWidth - 1320, displayHeight/2 + 155, 20, 20);
                book2.addImage(this.book2Img);
                book2.scale = 0.5;

                book3 = createSprite(displayWidth - 1400, displayHeight/2 + 185, 20, 20);
                book3.addImage(this.book3Img);
                book3.scale = 0.5;

                book4 = createSprite(displayWidth - 1350, displayHeight/2 + 160, 20, 20);
                book4.addImage(this.book4Img);
                book4.scale = 0.5;

                book5 = createSprite(displayWidth - 1393, displayHeight/2 + 175, 20, 20);
                book5.addImage(this.book5Img);
                book5.scale = 0.5;

                book6 = createSprite(displayWidth - 1335, displayHeight/2 + 150, 20, 20);
                book6.addImage(this.book6Img);
                book6.scale = 0.5;

                plant = createSprite(displayWidth - 1265, displayHeight/2 + 100, 20, 20);
                plant.addImage(this.plantImg);
                plant.scale = 0.5;

                box = createSprite(displayWidth - 1085, displayHeight / 2 - 280, 20, 20);
                box.addImage(this.boxImg);
                box.scale = 0.5; 

                ball = createSprite(displayWidth - 1090 , displayHeight/2 - 330 , 20, 20);
                ball.addImage(this.ballImg);
                ball.scale = 0.5;

                lionToy = createSprite(displayWidth - 985, displayHeight / 2 - 280, 20, 20);
                lionToy.addImage(this.lionToyImg);
                lionToy.scale = 0.5;

                skateboard = createSprite(displayWidth - 1265, displayHeight/2 - 165, 20, 20);
                skateboard.addImage(this.skateBoardImg);
                skateboard.scale = 0.5;

                test = createSprite(displayWidth - 1345, displayHeight/2 - 215, 20, 20);
                test.addImage(this.testImg);
                test.scale = 0.5;

                toDoList = createSprite(displayWidth - 1365, displayHeight/2 - 180, 20, 20);
                toDoList.addImage(this.ToDoImg);
                toDoList.scale = 0.5;

                picture = createSprite(displayWidth - 1305, displayHeight/2 - 125, 20, 20);
                picture.addImage(this.picture);
                picture.scale = 0.5;

                picture2 = createSprite(displayWidth - 1325, displayHeight/2 - 85, 20, 20);
                picture2.addImage(this.picture2);
                picture2.scale = 0.5;

                picture3 = createSprite(displayWidth - 1235, displayHeight/2 - 85, 20, 20);
                picture3.addImage(this.picture3);
                picture3.scale = 0.5;

                poster = createSprite(displayWidth - 300, displayHeight/2 - 40, 20, 20);
                poster.addImage(this.posterImg);
                poster.scale = 0.5;

                lamp = createSprite(displayWidth - 550, displayHeight/2 - 10, 20, 20);
                lamp.addImage(this.lampImg);
                lamp.scale = 0.5;

                mug = createSprite(displayWidth - 500, displayHeight/2 + 20, 20, 20);
                mug.addImage(this.mugImg);
                mug.scale = 0.5;

                pencil = createSprite(displayWidth - 504, displayHeight/2 + 10, 20, 20);
                pencil.addImage(this.pencilImg);
                pencil.scale = 0.5;

                pencil2 = createSprite(displayWidth - 500, displayHeight/2 + 10, 20, 20);
                pencil2.addImage(this.pencil2Img);
                pencil2.scale = 0.5;

                pencil3 = createSprite(displayWidth - 496, displayHeight/2 + 10, 20, 20);
                pencil3.addImage(this.pencil3Img);
                pencil3.scale = 0.5;

                pillow1 = createSprite(displayWidth - 420, displayHeight / 2 - 290, 20, 20);
                pillow1.addImage(this.pillow1Img);
                pillow1.scale = 0.5;

                pillow2 = createSprite(displayWidth - 370, displayHeight / 2 - 290, 20, 20);
                pillow2.addImage(this.pillow2Img);
                pillow2.scale = 0.5;

                pinkPillow = createSprite(displayWidth - 73, displayHeight / 2 + 50, 20, 20);
                pinkPillow.addImage(this.pinkPillowImg);
                pinkPillow.scale = 0.5;
            } else if (gameMap.map === 1) {
                background(this.pBG);

                football = createSprite(displayWidth - 1330, displayHeight/2 - 40, 20, 20);
                football.addImage(this.footballImg);
                football.scale = 0.5;

                toyCar = createSprite(displayWidth - 1200, displayHeight / 2 + 120, 20, 20);
                toyCar.addImage(this.toyCarImg);
                toyCar.scale = 0.5;

                bucket1 = createSprite(displayWidth - 930, displayHeight / 2 + 240, 20, 20);
                bucket1.addImage(this.bucketImg1);
                bucket1.scale = 0.5;

                shovel = createSprite(displayWidth - 810, displayHeight / 2 + 300, 20, 20);
                shovel.addImage(this.shovel);
                shovel.scale = 0.5;

                trafficCone = createSprite(displayWidth - 870, displayHeight / 2 + 265, 20, 20);
                trafficCone.addImage(this.trafficConeImg);
                trafficCone.scale = 0.5;

                bucket2 = createSprite(displayWidth - 600, displayHeight / 2 + 220, 20, 20);
                bucket2.addImage(this.bucketImg2);
                bucket2.scale = 0.5;

                // pinkPillow = createSprite(displayWidth - 73, displayHeight / 2 + 50, 20, 20);
                // pinkPillow.addImage(this.pinkPillowImg);
                // pinkPillow.scale = 0.5;

                // pinkPillow = createSprite(displayWidth - 73, displayHeight / 2 + 50, 20, 20);
                // pinkPillow.addImage(this.pinkPillowImg);
                // pinkPillow.scale = 0.5;
            }

            drawSprites();

            if (randPlayer === player.index) {
                player.role = "Seeker";
                player.update();
            } else if (player.object === null) {
                player.role = "Hider";
                player.update();
            } 
        }
        for (var plr in allPlayers) {
            if (player.hiderCaught === true) {
                console.log("Hello");
            }
            
            if (gameMap.map === 0) {
                if (seekerClicks > 10 && hiderCaught != true) {
                    seekerWon = false;
                    gameState = 2;
                    game.updateGameState(2);
                } else if (seekerClicks <= 10 && hiderCaught) {
                    seekerWon = true;
                    gameState = 2;
                    game.updateGameState(2);
                } 
            } else if (gameMap.map === 1) {
                if (seekerClicks > 5 && hiderCaught != true) {
                    seekerWon = false;
                    gameState = 2;
                    game.updateGameState(2);
                } else if (seekerClicks <= 5 && hiderCaught) {
                    seekerWon = true;
                    gameState = 2;
                    game.updateGameState(2);
                } 
            }
            

           /* if (player.role === "Seeker") {
                hintButton = createButton("Hints");
                hintButton.position(displayWidth - 100, 50);
                hintButton.mousePressed(() => {
                    console.log("Here is a hint");
                });
            }*/

        }
    }

    end() {
        background(255);
        for (var i in allPlayers) {
            if (allPlayers[i].role === "Caught") {
                congratulate = createElement('h1');
                congratulate.html("Seeker Wins");
                congratulate.position(displayWidth / 2 - 50, 60);
                congratulate.style('font-family', 'Lobster Two', 'font-size', 68);
            } else if (seekerClicks > 10) {
                congratulate = createElement('h1');
                congratulate.html("Prop Wins");
                congratulate.position(displayWidth / 2 - 50, 60);
                congratulate.style('font-family', 'Lobster Two', 'font-size', 68);
            }
    
            hintButton.hide();

            var playAgain = createButton("Play Again");
            playAgain.position(displayWidth / 2 + 30, displayHeight / 2);
            playAgain.style('background-color', '#D2DCDE');
            
            playAgain.mousePressed(() => {
                    gameState = 0;
                    game.updateGameState(0);
        
                    seekerClicks = 0;
                    playerCount = 0;
                    player.updatePlayerCount(0);
        
                    congratulate.hide();
                    playAgain.hide();
            }); 
        }
    }

    playerClick() {
        for (var i in allPlayers) {
            for (var j in players) {
                if (player.role === "Seeker") {
                    if (gameMap.map === 0) {
                        if (mouseIsOver(book)) {
                            if (allPlayers[i].object === "book") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(book2)) {
                            if (allPlayers[i].object === "book2") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(book3)) {
                            if (allPlayers[i].object === "book3") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            } 
                        } else if (mouseIsOver(book4)) {
                            if (allPlayers[i].object === "book4") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(book5)) {
                            if (allPlayers[i].object === "book5") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(book6)) {
                            if (allPlayers[i].object === "book6") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(box)) {
                            if (allPlayers[i].object === "box") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(ball)) {
                            if (allPlayers[i].object === "ball") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(lionToy)) {
                            if (allPlayers[i].object === "lionToy") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(mug)) {
                            if (allPlayers[i].object === "mug") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(pencil)) {
                            if (allPlayers[i].object === "pencil") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(pencil2)) {
                            if (allPlayers[i].object === "pencil2") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(pencil3)) {
                            if (allPlayers[i].object === "pencil3") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(picture)) {
                            if (allPlayers[i].object === "picture") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(picture2)) {
                            if (allPlayers[i].object === "picture2") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(picture3)) {
                            if (allPlayers[i].object === "picture3") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(pillow1)) {
                            if (allPlayers[i].object === "pillow1") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(pillow2)) {
                            if (allPlayers[i].object === "pillow2") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(pinkPillow)) {
                            if (allPlayers[i].object === "pinkPillow") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(plant)) {
                            if (allPlayers[i].object === "plant") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(poster)) {
                            if (allPlayers[i].object === "poster") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(skateboard)) {
                            if (allPlayers[i].object === "skateboard") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(test)) {
                            if (allPlayers[i].object === "test") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } else if (mouseIsOver(toDoList)) {
                            if (allPlayers[i].object === "toDo") {
                                Player.updatePlayerRole("Caught", i);
                                hiderCaught = true;
                            }
                        } 
                    }
                }
    
                if (player.role === "Hider") {
                    for (var i in players) {
                        for (var i in players) {
                                if (gameMap.map === 0) {
                                    if ("player" + player.index === players[i] && player.object === null) {
                                        if(mouseIsOver(book)) {
                                            console.log("book");
                                            player.object = "book";
                                            player.update();
                                        } else if (mouseIsOver(book2)) {
                                            player.object = "book2";
                                            player.update();
                                        } else if (mouseIsOver(book3)) {
                                            player.object= "book3";
                                            player.update();
                                        } else if (mouseIsOver(book4)) {
                                            player.object = "book4";
                                            player.update();
                                        } else if (mouseIsOver(book5)) {
                                            player.object = "book5";
                                            player.update();
                                        } else if (mouseIsOver(book6)) {
                                            player.object = "book6";
                                            player.update();
                                        } else if (mouseIsOver(box)) {
                                            player.object = "box";
                                            player.update();
                                        } else if (mouseIsOver(ball)) {
                                            player.object = "ball";
                                            player.update();
                                        } else if (mouseIsOver(lionToy)) {
                                            player.object = "lionToy";
                                            player.update();
                                        } else if (mouseIsOver(mug)) {
                                            player.object = "mug";
                                            player.update();
                                        } else if (mouseIsOver(pencil)) {
                                            player.object = "pencil";
                                            player.update();
                                        } else if (mouseIsOver(pencil2)) {
                                            player.object = "pencil2";
                                            player.update();
                                        } else if (mouseIsOver(pencil3)) {
                                            player.object = "pencil3";
                                            player.update();
                                        } else if (mouseIsOver(picture)) {
                                            player.object = "picture";
                                            player.update();
                                        } else if (mouseIsOver(picture2)) {
                                            player.object = "picture2";
                                            player.update();
                                        } else if (mouseIsOver(picture3)) {
                                            player.object = "picture3";
                                            player.update();
                                        } else if (mouseIsOver(pillow1)) {
                                            player.object = "pillow1";
                                            player.update();
                                        } else if (mouseIsOver(pillow2)) {
                                            player.object = "pillow2";
                                            player.update();
                                        } else if (mouseIsOver(pinkPillow)) {
                                            player.object = "pinkPillow";
                                            player.update();
                                        } else if (mouseIsOver(plant)) {
                                            player.object = "plant";
                                            player.update();
                                        } else if (mouseIsOver(poster)) {
                                            player.object = "poster";
                                            player.update();
                                        } else if (mouseIsOver(skateboard)) {
                                            player.object = "skateboard";
                                            player.update();
                                        } else if (mouseIsOver(test)) {
                                            player.object = "test";
                                            player.update();
                                        }
                                    }
                            } else if (gameMap.map === 1) {
                                
                            }
                        }    
                    } 
                } else if (player.role === "Caught") {
                    seekerWon = true;
                    hiderCaught = true;
                }
            }    
        }     
    }
}
