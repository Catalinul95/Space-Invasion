class CanvasRenderer {
    constructor(display, contextType) {
        this.display = display;
        this.context = this.display.canvas.getContext(contextType);
    }
    getRenderer() {
    	return this.context;
    }
    clear() {
        this.context.clearRect(0, 0, this.display.getWidth(), this.display.getHeight());
    }
    setColor(color) {
    	this.context.fillStyle = color;
    }
    drawText(fontAndSize, text, x, y, center = false) {
    	this.context.font = fontAndSize;

    	if (center) {
    		let textWidth = this.context.measureText(text).width;

    		this.context.fillText(text, (this.display.getWidth() / 2) - (textWidth / 2), y);
    	} else {
    		this.context.fillText(text, x, y);
    	}
    }
}