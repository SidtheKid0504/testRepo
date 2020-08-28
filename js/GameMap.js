class Map {
    constructor() {}

    selectMap(mapId) {
        database.ref('/').update({
            Map: mapNumber
        });
    }
    
    getMap() {
        var mapRef = database.ref('Map');

        mapRef.on("value", (data) => {
           map = data.val();
        });
    }
}
