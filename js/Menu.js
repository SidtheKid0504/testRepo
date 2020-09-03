class Menu {
    constructor() {
        this.title = createElement("h1");
        this.nameInput = createInput("Enter Name Here: ");
        this.playButton = createButton("Play");
        this.greeting = null;
    }

    hide() {
        this.title.hide();
        this.nameInput.hide();
        this.playButton.hide();

        if (this.greeting !== null) {
            this.greeting.hide();
        }
    }

    display() {
        background(mainMenuBG);
        this.title.html("Prop Swap");
        this.title.style('font-family', 'Lobster Two', 'font-size', 68);
        this.title.position(displayWidth / 2 - 50, 60);

        this.nameInput.position(displayWidth/2 - 40, displayHeight/2 - 80);
        this.playButton.position(displayWidth / 2 + 30, displayHeight / 2);
        this.playButton.style('background-color', '#D2DCDE');

        this.playButton.mousePressed(() => {
            this.title.hide();
            this.playButton.hide();
            this.nameInput.hide();

            playground = createSprite(displayWidth/4 + 60, displayHeight/2, 20, 20);
            playground.addImage(playgroundImg);

            bedroom = createSprite(displayWidth/2 + 350, displayHeight /2, 20, 20);
            bedroom.addImage(bedroomImg);
            
            playground.onMouseOver = () => {
                playground.addImage(playgroundHoverImg);
            }

            playground.onMouseOut = () => {
                playground.addImage(playgroundImg);
            }

            bedroom.onMouseOver = () => {
                bedroom.addImage(bedroomHoverImg);
            }

            bedroom.onMouseOut = () => {
                bedroom.addImage(bedroomImg);
            }


            playground.onMousePressed = () => {
                player.mapChoice = "Playground";
                playerCount++;
                player.index = playerCount;
                player.update();
                player.updatePlayerCount(playerCount);
                playground.remove();
                bedroom.remove();
            }

            bedroom.onMousePressed = () => {
                player.mapChoice = "Bedroom";
                playerCount++;
                player.index = playerCount;
                player.update();
                player.updatePlayerCount(playerCount);
                bedroom.remove();
                playground.remove();
            }
            player.name = this.nameInput.value();

            this.greeting = createElement("h3");
            this.greeting.html("Hello " + player.name + ", pick the map you want to play on");
            this.greeting.position(displayWidth / 2 - 50, 0);
        });
    }
}
