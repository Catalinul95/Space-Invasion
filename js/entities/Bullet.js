class Bullet extends Entity {
    constructor(sprite, x, y, width, height, velocity) {
        super();
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = 5;
    }
    directionUp() {
    	this.setPosY(this.getPosY() - this.getVelocity());
    }
    directionDown() {
    	this.setPosY(this.getPosY() + this.getVelocity());
    }
}