class KeyBoardInput {
    constructor() {
        this.keys = [];
        const that = this;

        window.addEventListener('keydown', (e) => {
            this.keys[e.keyCode] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.keyCode] = false;
        });
    }
    isLeft() {
        if (this.keys[37]) {
            return true;
        }

        return false;
    }
    isRight() {
        if (this.keys[39]) {
            return true;
        }

        return false;
    }
    isSpace() {
        if (this.keys[32]) {
            return true;
        }

        return false;
    }
    isEnter() {
        if (this.keys[13]) {
            return true;
        }

        return false;
    }
}