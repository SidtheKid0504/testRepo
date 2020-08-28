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
        this.title.html("Hide and Seek");
        this.title.position(displayWidth / 2 - 50, 0);

        this.nameInput.position(displayWidth / 2 - 40, displayHeight/ 2 - 80);
        this.playButton.position(displayWidth / 2 + 30, displayHeight / 2);

        this.playButton.mousePressed(() => {
            this.title.hide();
            this.playButton.hide();
            this.nameInput.hide();

            player.name = this.nameInput.value();

            this.greeting = createElement("h3");
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth / 2 - 50, 0);

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updatePlayerCount(playerCount);
        });
    }
}