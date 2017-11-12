class FPS {
    constructor() {
        this.lastFrame;
        this.FPS = 0;
    }
    track() {
        if (!this.lastFrame) {
            this.lastFrame = performance.now();
        } else {
            let delta = (performance.now() - this.lastFrame) / 1000;
            this.lastFrame = performance.now();
            this.FPS = parseInt(1 / delta);
        }
    }
    getFPS() {
        return this.FPS;
    }
}