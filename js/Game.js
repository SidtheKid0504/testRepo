class Game {
    constructor() {}

    getGameState() {
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
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

        player1 = createSprite(100, 100);
        player2 = createSprite(100, 100);
        // player3 = createSprite(100, 100);
        // player4 = createSprite(100, 100);
        // player5 = createSprite(100, 100);
        // player6 = createSprite(100, 100);
        // player7 = createSprite(100, 100);
        // player8 = createSprite(100, 100);
        // player9 = createSprite(100, 100);
        // player10 = createSprite(100, 100);
        // player11 = createSprite(100, 100);
        // player12 = createSprite(100, 100);
        // player13 = createSprite(100, 100);
        // player14 = createSprite(100, 100);
        // player15 = createSprite(100, 100);
        // player16 = createSprite(100, 100);
        // player17 = createSprite(100, 100);
        // player18 = createSprite(100, 100);
        // player19 = createSprite(100, 100);
        // player20 = createSprite(100, 100);

        //randPlayer = Math.round(Math.random() * Math.floor(20));
        players = [player1, player2];
        randPlayer = 2;
    }

    play() {

        menu.hide();
        Player.getPlayerInfo();

        if (allPlayers !== undefined) {
            var index = 0;
            var x = 0;
            var y = 100;

            for(var plr in allPlayers) {
                index++;
                x = displayWidth + allPlayers[plr].x;

                players[index-1].x = x;
                players[index-1].y = y;
                
                if (randPlayer === player.index) {
                    player.role = "Seeker";
                    player.update();
                } else {
                    player.role = "Hider";
                    player.update();
                }

                if (index === player.index) {
                    camera.position.x = players[index-1].x;
                    camera.position.y = displayHeight/2;
                } 

                if (player.role === "Seeker") {
                    console.log('Seeker');
                }

                if (player.role === "Hider") {
                    var prop = new Prop(displayWidth/2, 200);
                    prop.display();

                    if (prop.x === undefined) {
                        player1.addImage(prop.image);
                        console.log(prop.image);
                    }
                }
            }

            if (keyDown("a") && player.index !== null) {
                player.x -= 10;
                player.update();
            }
    
            if (keyDown("d") && player.index !== null) {
                player.x += 10;
                player.update();
            }
        }

        drawSprites();
    }

    end() {

    }
}