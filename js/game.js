class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.track1 = new Track1(ctx);
        this.car = new Car(ctx);

        this.interval = null;

        this.setListeners();
    }

    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
        }, 1000 / 60);
    }
    
    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.track1.draw();
    }

    move() {
        this.car.move();
    }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            this.player.keyDown(e.keyCode)
        })
    }
};

