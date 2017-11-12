 class Game {
    constructor() {
        // core stuff
        this.display = new CanvasDisplay('#backgroundLayer');
        this.customRenderer = new CanvasRenderer(this.display, '2d');
        this.renderer =  this.customRenderer.getRenderer();
        this.imageLoader = new ImageLoader(['player.png', 'player_bullet.png', 'enemy.png', 'enemy_bullet.png'], 'images/');
        this.keyboardInput = new KeyBoardInput();
        this.FPS = new FPS();

        // enemy related staff
        this.enemyBlastSound = new Audio('audio/blast.wav');
        this.enemyReloadTicks = new Tick();
        this.enemySpwanTicks = new Tick();
        this.enemyBulletFactory = new BulletFactory(this.imageLoader.getImage('enemy_bullet.png'));
        this.enemyBulletsManager = new BulletsManager(this.renderer, 'enemy');
        this.enemyFactory = new EnemyFactory(this.imageLoader.getImage('enemy.png'));
        this.enemyManager = new EnemyManager(
            this.renderer, 
            this.enemyFactory, 
            this.enemyBulletFactory,
            this.enemyBulletsManager,
            this.enemyReloadTicks, 
            this.enemySpwanTicks,
        );

        // player related staff
        this.playerBulletSound = new Audio('audio/laser.mp3');
        this.playerReloadTicks = new Tick();
        this.player = new Player(
            this.imageLoader.getImage('player.png'),
            100,
            600,
            35, 
            35,
            2.5,
            20
        );
        this.playerBulletFactory = new BulletFactory(this.imageLoader.getImage('player_bullet.png'));
        this.playerBulletsManager = new BulletsManager(this.renderer, 'player');
        this.playerManager = new PlayerManager(
            this.display,
            this.renderer, 
            this.player, 
            this.keyboardInput,
            this.playerReloadTicks,
            this.playerBulletFactory,
            this.playerBulletsManager,
            this.playerBulletSound,
        );

        // game related staff
        this.gameManager = new GameManager(
            this.display, 
            this.customRenderer, 
            this.keyboardInput,
            this.enemyManager,
            this.enemyBulletsManager,
            this.playerBulletsManager,
            );
        this.collision = new Collision(this.gameManager, this.enemyBlastSound);

    }
    update() {
        // enemy related stuff
        this.enemyManager.update();
        this.enemyBulletsManager.update();

        // player related stuff
        this.playerManager.update();
        this.playerBulletsManager.update();

        // collison related staff
        this.collision.handleBulletAndEnemy(this.playerBulletsManager, this.enemyManager);
        this.collision.handleBulletAndPlayer(this.enemyBulletsManager, this.player);
        this.collision.handleEnemyAndPlayer(this.enemyManager, this.player);
        this.collision.handleEnemyExceedsScreen(this.enemyManager);
    }
    draw() {
        // enemy related staff
        this.enemyManager.draw();
        this.enemyBulletsManager.draw();

        // player related staff
        this.playerManager.draw();
        this.playerBulletsManager.draw();
    }
    run() {
        const that = this;

        function animate() {
            window.requestAnimationFrame(animate);
            that.renderer.clearRect(0, 0, that.display.getWidth(), that.display.getHeight());

            that.FPS.track();

            // check if assets are loaded
            if (that.imageLoader.isCompleted() && !that.gameManager.state.assetsLoaded) {
                that.gameManager.state.assetsLoaded = true;
                that.gameManager.state.inMenu = true;
            }
            
            // draw the menu if we are in the menu area
            if (that.gameManager.state.inMenu) {
                that.gameManager.drawMenu();
            }

            // start playing the game
            if (that.gameManager.state.isPlaying) {
                that.update();
                that.draw();

                that.enemySpwanTicks.incrementTicks();
                that.enemyReloadTicks.incrementTicks();
                that.playerReloadTicks.incrementTicks();
            }

            // draw the game over area
            if (that.gameManager.state.isGameOver) {
                that.gameManager.drawGameOver();
            }

            that.gameManager.listenForNewGame();
        }

        animate();
    }
}

