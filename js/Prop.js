class Prop {
    constructor(x, y) {
        this.body = createSprite(x, y);
        this.image = loadImage("images/Paper.png");
    }

    display() {
        this.body.addImage(this.image);
        this.body.scale = 0.75;
    }
}