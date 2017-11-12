class CanvasDisplay {
    constructor(canvasId) {
        this.canvas = document.querySelector(canvasId);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}