class Tick {
    constructor() {
        this.ticks = 0;
    }
    isBiggerThan(ticks) {
        if (this.ticks > ticks) {
            return true;
        }

        return false;
    }
    isEqual(ticks) {
        if (this.ticks == ticks) {
            return true;
        }

        return false;
    }
    incrementTicks() {
        this.ticks += 1;
    }
    resetTicks() {
        this.ticks = 0;
    }
}