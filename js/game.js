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

        this.rivers = [
            new River(ctx, 375, 175, { tie: 150, tie2: 500, tie3: 250 }, -1),
            new River(ctx, 0, 150, { tie: 100, tie2: 140, tie3: 240 }, 1.3),
            new River(ctx, 375, 125, { tie: 100, tie2: 500, tie3: 240 }, -0.90),
            new River(ctx, 0, 100, { tie: 50, tie2: 140, tie3: 240 }, 1.1),
            new River(ctx, 375, 75, { tie: 50, tie2: 140, tie3: 240 }, -1.5),
        ]

        this.luke = new Luke(ctx)
        this.leia = new Leia(ctx)
        this.yoda = new Yoda(ctx)
        this.han = new Han(ctx)

        this.capturedOnes = {
            yoda: false,
            luke: false,
            leia: false,
            han: false
        }

        this.interval = null;

        this.setListeners();
    }

    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.createVehicles()
            this.draw();
            this.move();
            this.checkPlatform();
            this.checkCollisions()
            this.captureRebel()
            this.gameWin()
            //this.drown()

        }, 1000 / 60);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.lanes.forEach(lane => lane.clear())
        this.rivers.forEach(river => river.clear())
    }

    createVehicles() {
        this.lanes.forEach(lane => lane.createVehicles())
        this.rivers.forEach(river => river.createPlatforms())
    }

    draw() {
        this.background.draw();
        this.lanes.forEach(lane => lane.draw());
        this.rivers.forEach(river => river.draw())
        this.yoda.draw()
        this.luke.draw()
        this.leia.draw()
        this.han.draw()
        this.player.draw();
        
    }

    move() {
        this.player.move();
        this.lanes.forEach(lane => lane.move());
        this.rivers.forEach(river => river.move())
        
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
                    this.gameOver()
                }
            })
        })
    }

    checkPlatform() {
        this.rivers.forEach((river) => {
            river.platforms.forEach((platform) => {
                if (platform.collides(this.player)) {
                    this.player.x += platform.vx            
                } 
            })     
        })  
    }

    drown() {
      /* if (this.player.y >= 75 && this.player.y <= 175) {
        if (!this.checkPlatform()) {
            console.log('prueba')
        }
        } else {
            this.gameOver()
        } 
         */
    }  

    captureRebel() {
        if (this.yoda.collides(this.player)) {
            this.yoda.y = 50
            this.yoda.w = 20
            this.yoda.h = 20
            this.yoda.img.src = 'assets/img/trooper.png'
            this.player.x = 175
            this.player.y = 350
            this.capturedOnes.yoda = true   
        }

        if (this.luke.collides(this.player)) {
            this.luke.img.src = 'assets/img/trooper.png'
            this.player.x = 175
            this.player.y = 350
            this.capturedOnes.luke = true   
        }

        if (this.leia.collides(this.player)) {
            this.leia.img.src = 'assets/img/trooper.png' 
            this.player.x = 175
            this.player.y = 350
            this.capturedOnes.leia = true   
        }

        if (this.han.collides(this.player)) {
            this.han.img.src = 'assets/img/trooper.png'
            this.player.x = 175
            this.player.y = 350 
            this.capturedOnes.han = true     
        }
        console.log(this.capturedOnes)
    }

    gameWin() {
        if(this.capturedOnes.yoda === true 
            && this.capturedOnes.luke === true 
            && this.capturedOnes.leia === true 
            && this.capturedOnes.han === true) {
            this.stop()
            document.getElementById('game').style.visibility = 'hidden'
            document.getElementById('gameWin').style.visibility = 'visible'
        }
    }
 
    gameOver() {
        this.stop()
        document.getElementById('game').style.visibility = 'hidden'
        document.getElementById('gameOver').style.visibility = 'visible'
    }
}


