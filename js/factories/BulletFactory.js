class BulletFactory {
    constructor(sprite) {
        this.sprite = sprite;
    }
    newPlayerBullet(entity) {
        return new Bullet(
            this.sprite, 
            entity.getPosX() + (entity.getWidth() / 2),
            entity.getPosY() - 5,
            5,
            5,
            entity.getVelocity(),
        );
    }
    newEnemyBullet(entity) {
        return new Bullet(
            this.sprite, 
            entity.getPosX() + (entity.getWidth() / 2),
            entity.getPosY() + 5,
            5,
            5,
            entity.getVelocity(),
        );
    }
}