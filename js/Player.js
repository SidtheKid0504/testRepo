class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.role = null;
        this.object = null;
        this.mapChoice = "";
    }

    getPlayerCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
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
            object: this.object,
            mapChoice: this.mapChoice
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
          allPlayers = data.val();
        });
    }

    static updatePlayerRole(role, playerNum) {
        database.ref("players/"+playerNum).update({
            role: role
        });
    }
}
