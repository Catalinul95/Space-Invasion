class PlayerManager {
    constructor(display, renderer, player, keyboardInput, ticks, bulletFactory, bulletsManager, playerBulletSound) {
        this.display = display;
        this.renderer = renderer;
        this.player = player;
        this.keyboardInput = keyboardInput;
        this.ticks = ticks;
        this.bulletFactory = bulletFactory;
        this.bulletsManager = bulletsManager;
        this.playerBulletSound = playerBulletSound;
    }
    update() {
        // move the player
        if (this.keyboardInput.isLeft() && this.player.getPosX() - this.player.getVelocity() > 0) {
            this.player.setPosX(this.player.getPosX() - this.player.getVelocity())
        }

        if (this.keyboardInput.isRight() && this.player.getPosX() + this.player.getWidth() + this.player.getVelocity() < this.display.getWidth()) {
            this.player.setPosX(this.player.getPosX() + this.player.getVelocity())
        }

        // fire bullets
        if (this.keyboardInput.isSpace()) {
            if (this.ticks.isBiggerThan(this.player.ticksToReload)) {
                this.playerBulletSound.cloneNode(true).play();
                this.playerBulletSound.pause();
                this.bulletsManager.newBullet(this.bulletFactory.newPlayerBullet(this.player));
                this.ticks.resetTicks();
            }
        }


    }
    draw() {
        this.renderer.drawImage(
            this.player.getSprite(),
            0,
            0,
            this.player.getSprite().width, 
            this.player.getSprite().height,
            this.player.getPosX(),
            this.player.getPosY(),
            this.player.getWidth(), 
            this.player.getHeight()
        );
    }
}