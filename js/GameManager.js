class GameManager {
	constructor(display, customRenderer, keyBoardInput, enemyManager, enemyBulletManager, playerBulletManager) {
		this.display = display;
		this.customRenderer = customRenderer;
		this.keyBoardInput = keyBoardInput;
		this.enemyManager = enemyManager;
		this.enemyBulletManager = enemyBulletManager;
		this.playerBulletManager = playerBulletManager;
		this.score = 0;
		this.state = {
			assetsLoaded: false,
			isPlaying: false,
			inMenu: false,
			isGameOver: false,
		};
	}
	updateScore(points) {
		this.score += points;
	}
	setGameOver() {
		this.state.isGameOver = true;
		this.state.isPlaying = false;
		this.state.inMenu = false;
	}
	listenForNewGame() {
		if (this.keyBoardInput.isEnter() && this.state.assetsLoaded && !this.state.isPlaying) {
			if (this.state.inMenu || this.state.isGameOver) {
				this.state.isPlaying = true;
				this.state.inMenu = false;
				this.state.isGameOver =  false;
				this.enemyManager.resetEnemies();
				this.enemyBulletManager.resetBullets();
				this.playerBulletManager.resetBullets();
				this.score = 0;
			}
		}
	}
	drawMenu() {
		this.customRenderer.setColor('#fff');
        this.customRenderer.drawText('40px kenvector_future', 'SPACE INVASION', 0, 200, true);
        this.customRenderer.setColor('green');
        this.customRenderer.drawText('15px kenvector_future', 'Press ENTER to start a new game', 0, 250, true);
        this.customRenderer.setColor('blue');
        this.customRenderer.drawText('15px kenvector_future', 'Mission: Save Earth from alien invasion', 0, 300, true);
        this.customRenderer.setColor('#fff');
        this.customRenderer.drawText('10px kenvector_future', 'Left/Right for movement and SPACE to fire missles', 0, 600, true);
	}
	drawLoading() {
		this.customRenderer.setColor('#fff');
        this.customRenderer.drawText('35px kenvector_future', 'Loading...', 0, 300, true);
	}
	drawGameOver() {
		this.customRenderer.setColor('red');
        this.customRenderer.drawText('35px kenvector_future', 'Game Over', 0, 300, true);
        this.customRenderer.setColor('#fff');
        this.customRenderer.drawText('35px kenvector_future', 'Score: ' + this.score, 0, 350, true);
        this.customRenderer.setColor('green');
        this.customRenderer.drawText('15px kenvector_future', 'Press ENTER to start a new game', 0, 400, true);
	}
}