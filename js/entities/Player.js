class Player extends Entity {
    constructor(sprite, x, y, width, height, velocity, ticksToReload = 8) {
        super();
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = 5;
        this.ticksToReload = ticksToReload;
    }
}