class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }

    start() {
        console.log("Timer " + this.title + " started (delay=" + this.delay + ", stopCount=" + this.stopCount + ")");
        let count = (this.delay * this.stopCount) / 1000;
        let timerId = setInterval(() => this.tick(count--, timerId), this.delay);
    }

    tick(count, timerId) {
        if (count != 0) console.log("Timer " + this.title + " Tick! | cycles left " + count);
        else this.stop(timerId);
    }

    stop(timerId) {
        clearInterval(timerId);
        console.log("Timer " + this.title + " stopped");
    }
};

function runTimer(id, delay, counter) {
    let temp = new Timer(id, delay, counter);
    temp.start();
}

//runTimer("Bleep", 1000, 5);
/*
Console output:

Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/
