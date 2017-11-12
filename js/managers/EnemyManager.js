class EnemyManager {
	constructor(renderer, enemyFactory, bulletFactory, bulletsManager, enemyReloadTicks, enemySpawnTicks) {
		this.enemies = [];
		this.renderer = renderer;
		this.enemyFactory = enemyFactory;
		this.bulletFactory = bulletFactory;
		this.bulletsManager = bulletsManager;
		this.enemyReloadTicks = enemyReloadTicks;
		this.enemySpawnTicks = enemySpawnTicks;
	}
	update() {
		// reset reloading ticks when it reaches a limit
		if (this.enemyReloadTicks.isBiggerThan(160)) {
			this.enemyReloadTicks.resetTicks();
		}

		// time to add new enemy
		if (this.enemySpawnTicks.isBiggerThan(60)) {
			this.enemies.push(
				this.enemyFactory.newEnemy()
			);
			this.enemySpawnTicks.resetTicks();
		}

		// update enemy positions
		for (let i = 0; i < this.enemies.length; i++) {
			const enemy = this.enemies[i];
			this.enemies[i].setPosY(enemy.getPosY() + enemy.getVelocity());
		}

		// enemy sends bullets
		for (let i = 0; i < this.enemies.length; i++) {
			const enemy = this.enemies[i];

			if (this.enemyReloadTicks.isEqual(enemy.ticksToReload)) { 
				this.bulletsManager.newBullet(this.bulletFactory.newEnemyBullet(enemy));
			}
		}

		
	}
	draw() {
		for (let i = 0; i < this.enemies.length; i++) {
			const enemy = this.enemies[i];
			this.renderer.drawImage(
				enemy.getSprite(),
				0,
				0,
				enemy.getSprite().width,
				enemy.getSprite().height,
				enemy.getPosX(),
				enemy.getPosY(),
				enemy.getWidth(),
				enemy.getHeight(),
			);
		}
	}
	resetEnemies() {
        this.enemies = [];
    }
}