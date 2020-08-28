class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.role = null;
        this.x = 0;
        this.y = 100;
    }

    getPlayerCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val()
        });
    }

    updatePlayerCount(playerNum) {
        database.ref('/').update({
            playerCount: playerNum
        }); 
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            role: this.role,
            x: this.x,
            y: this.y
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        });
    }
}