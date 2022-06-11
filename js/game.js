class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);
    
        this.player = new Player(ctx);
        
        this.lanes = [
            new Lane(ctx, 375, 325, { xwing: 150, falcon: 500, speeder: 250 }, -1),
            new Lane(ctx, 0, 300, { xwing: 100, falcon: 140, speeder: 240 }, 1.3),
            new Lane(ctx, 375, 275, { xwing: 100, falcon: 500, speeder: 240 }, -0.90),
            new Lane(ctx, 0, 250, { xwing: 50, falcon: 140, speeder: 240 }, 1.1),
            new Lane(ctx, 375, 225, { xwing: 50, falcon: 140, speeder: 240 }, -1.5),
        ]  
        
        this.interval = null;

        this.setListeners();
    }

    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.createVehicles()
            this.draw();
            this.move();
            // this.checkPlatform();
            this.checkCollisions()

        }, 1000 / 60);
    }
    
    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.lanes.forEach(lane => lane.clear())
    }

    createVehicles() {
        this.lanes.forEach(lane => lane.createVehicles())
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.lanes.forEach(lane => lane.draw());   
    }

    move() {
        this.player.move();
        this.lanes.forEach(lane => lane.move());   
    }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            this.player.keyDown(e.keyCode);
        })
    }

    checkCollisions() {
        this.lanes.forEach((lane) => {
            lane.vehicles.forEach((vehicle) => {
                if (vehicle.collides(this.player)) {
                    this.stop()
                }
            })
        })
    }


    /*checkPlatform() {
        
        this.river1.forEach((trunk) => {
            if (trunk.collides(this.player)) {
                this.player.x += trunk.vx
            }
        })
    }*/
};

