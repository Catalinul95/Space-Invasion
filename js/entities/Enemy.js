class Enemy extends Entity {
    constructor(sprite, x, y, width, height, velocity, ticksToReload = 10) {
        super();
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.ticksToReload = ticksToReload;
    }
}