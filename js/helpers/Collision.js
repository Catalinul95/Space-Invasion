class Collision extends Rectangle {
	constructor(gameManager, enemyBlastSound) {
		super();
		this.gameManager = gameManager;
		this.enemyBlastSound = enemyBlastSound;
	}
	handleBulletAndEnemy(playerBulletsManager, enemyManager) {
		const bullets = playerBulletsManager.bullets;
		const enemies = enemyManager.enemies;

		for (let i = 0; i < bullets.length; i++) {
			const bullet = bullets[i];
			for (let j = 0; j < enemies.length; j++) {
				const enemy = enemies[j];
				if (this.intersects(bullet, enemy)) {
					this.enemyBlastSound.cloneNode(true).play();
					this.enemyBlastSound.pause();
					enemyManager.enemies.splice(j, 1);
					playerBulletsManager.bullets.splice(j, 1);
					this.gameManager.updateScore(10);
				}
			}
		}
	}
	handleBulletAndPlayer(enemyBulletManager, player) {
		const bullets = enemyBulletManager.bullets;

		for (let i = 0; i < bullets.length; i++) {
			if (this.intersects(bullets[i], player)) {
				this.gameManager.setGameOver();
			}
		}
	}
	handleEnemyAndPlayer(enemyManager, player) {
		const enemies = enemyManager.enemies;

		for (var i = 0; i < enemies.length; i++) {
			if (this.intersects(enemies[i], player)) {
				this.gameManager.setGameOver();
			}
		}
	}
	handleEnemyExceedsScreen(enemyManager) {
		const enemies = enemyManager.enemies;

		for (var i = 0; i < enemies.length; i++) {
			if (enemies[i].getPosY() + enemies[i].getHeight() > 650) {
				this.gameManager.setGameOver();
			}
		}
	}
}