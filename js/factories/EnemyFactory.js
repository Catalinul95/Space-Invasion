class EnemyFactory {
	constructor(sprite) {
		this.sprite = sprite;
	}
	newEnemy() {
		return new Enemy(
			this.sprite,
			Math.floor((Math.random() * 420) + 35),
			-40,
			35,
			35,
			.6,
			Math.floor((Math.random() * 160) + 30)
		);
	}
}