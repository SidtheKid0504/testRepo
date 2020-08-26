var map;
var mapNumber;
var mapSelect;
var database;

function preload(){

}

function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    
    
    mapSelect = new Map();
    mapNumber = Math.random(0, 4);
}

function draw() {
   // mapSelect.selectMap(mapNumber);
    //mapSelect.getMap();

    if (map === 0) {
        background(0);
    } else if (map === 1) {
        background(255);
    } else if (map === 2){
        background(255, 0, 0);
    } else if (map === 3) {
        background(0, 255, 0);
    } else if (map === 4) {
        background(0, 0, 255);
    }

    console.log(database);

    drawSprites()
}
