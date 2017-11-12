class BulletsManager {
    constructor(renderer, type) {
        this.bullets = [];
        this.renderer = renderer;
        this.type = type;
    }
    newBullet(bullet) {
        this.bullets.push(bullet);
    }
    update() {
        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i];
            if (this.type == "player") {
                if (bullet.getPosY() > 0) {
                    this.bullets[i].directionUp();
                } else {
                    this.bullets.splice(i, 1);
                }
            }

            if (this.type == "enemy") {
                if (bullet.getPosY() < 650) {
                    this.bullets[i].directionDown();
                } else {
                    this.bullets.splice(i, 1);
                }
            }
        }
    }
    draw() {
        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i];
            this.renderer.drawImage(
                bullet.getSprite(),
                0,
                0,
                bullet.getSprite().width,
                bullet.getSprite().height,
                bullet.getPosX(),
                bullet.getPosY(),
                bullet.getWidth(),
                bullet.getHeight()
             );
        }   
    }
    resetBullets() {
        this.bullets = [];
    }
}