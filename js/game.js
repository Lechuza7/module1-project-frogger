class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);

        this.player = new Player(ctx);

        this.isPlayerFreeze = true;

        this.lanes = [
            new Lane(ctx, 375, 325, { xwing: 150, falcon: 500, speeder: 250 }, -0.9),
            new Lane(ctx, 0, 300, { xwing: 100, falcon: 140, speeder: 240 }, 1.2),
            new Lane(ctx, 375, 275, { xwing: 100, falcon: 500, speeder: 240 }, -0.8),
            new Lane(ctx, 0, 250, { xwing: 50, falcon: 140, speeder: 240 }, 1),
            new Lane(ctx, 375, 225, { xwing: 50, falcon: 140, speeder: 240 }, -1.4),
        ]

        this.rivers = [
            new River(ctx, 375, 175, { tie: 150, tie2: 500, tie3: 250 }, -0.8),
            new River(ctx, 0, 150, { tie: 100, tie2: 140, tie3: 240 }, 0.55),
            new River(ctx, 375, 125, { tie: 100, tie2: 500, tie3: 240 }, -0.7),
            new River(ctx, 0, 100, { tie: 50, tie2: 140, tie3: 240 }, 0.8),
            new River(ctx, 375, 75, { tie: 50, tie2: 140, tie3: 240 }, -0.5),
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

        this.lifes = [
            new Life(ctx, 80, 375),
            new Life(ctx, 100, 375),
        ]

        this.gameTheme = new Audio('assets/audio/shake-your-booty.mp3')
        this.gameTheme.volume = 0.08

        this.vaderBreathing = new Audio('assets/audio/vader-breathe.mp3')
        this.vaderBreathing.volume = 0.03

        this.imperialMarch = new Audio('assets/audio/imperial-march-theme.mp3')
        this.imperialMarch.volume = 0.08

        this.vehicleCrash = new Audio('assets/audio/crash3.mp3')
        this.vehicleCrash.volume = 0.06

        this.splash = new Audio('assets/audio/splash.mp3')
        this.splash.volume = 0.2

        this.vaderDefeated = new Audio('assets/audio/boss-dies.wav')
        this.vaderDefeated.volume = 0.2

        this.rebelCaptured = new Audio('assets/audio/rebel-captured.mp3')
        this.rebelCaptured.volume = 0.2

        this.rebellionDefeated = new Audio('assets/audio/journey-ends-here.mp3')
        this.rebellionDefeated.volume = 0.1

        this.gameOverTheme = new Audio('assets/audio/force-suite-theme.mp3')
        this.gameOverTheme.volume = 0.1

        this.interval = null;

        this.setListeners();
    }

    start() {
        if (!this.interval) {
            setTimeout(() => this.isPlayerFreeze = false, 2000)
            this.vaderBreathing.play()
            this.gameTheme.play()

            this.interval = setInterval(() => {
                this.clear();
                this.createVehicles()
                this.draw();
                this.move();
                this.checkCollisions()
                this.captureRebel()
                this.gameWin()

            }, 1000 / 60);
        }
    }

    stop() {
        this.vaderBreathing.pause()
        this.gameTheme.pause()
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
        this.lifes.forEach(life => life.draw())
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
        document.addEventListener('keyup', (e) => {
            if (this.interval && !this.isPlayerFreeze) {
                this.player.keyUp(e.keyCode);
            }
        })
    }

    checkCollisions() {
        this.lanes.forEach((lane) => {
            lane.vehicles.forEach((vehicle) => {
                if (vehicle.collides(this.player)) {
                    this.vehicleCrash.play()
                    this.loseLife()
                }
            })
        })
        if (this.isSinking() && !this.isOnPlatform()) {
            this.splash.play()
            this.loseLife()
        }
    }

    isOnPlatform() {
        return this.rivers.some((river) => {
            return river.platforms.some((platform) => {
                if (platform.collides(this.player)) {
                    this.player.x += platform.vx
                    return true
                } else {
                    return false
                }
            })
        })
    }

    isSinking() {
        return this.player.y >= 75 && this.player.y <= 175

    }

    loseLife() {
        this.player.x = 175
        this.player.y = 350
        this.lifes.pop()
        if (this.lifes.length === 0) {
            this.gameOver()
        }
    }

    captureRebel() {
        if (this.capturedOnes.yoda === false) {
            if (this.yoda.collides(this.player)) {
                this.rebelCaptured.play()
                this.yoda.y = 50
                this.yoda.w = 20
                this.yoda.h = 20
                this.yoda.img.src = 'assets/img/trooper.png'
                this.player.x = 175
                this.player.y = 350
                this.capturedOnes.yoda = true
            }
        }
        if (this.capturedOnes.luke === false) {
            if (this.luke.collides(this.player)) {
                this.rebelCaptured.play()
                this.luke.img.src = 'assets/img/trooper.png'
                this.player.x = 175
                this.player.y = 350
                this.capturedOnes.luke = true
            }
        }

        if (this.capturedOnes.leia === false) {
            if (this.leia.collides(this.player)) {
                this.rebelCaptured.play()
                this.leia.img.src = 'assets/img/trooper.png'
                this.player.x = 175
                this.player.y = 350
                this.capturedOnes.leia = true
            }
        }
        if (this.capturedOnes.han === false) {
            if (this.han.collides(this.player)) {
                this.rebelCaptured.play()
                this.han.img.src = 'assets/img/trooper.png'
                this.player.x = 175
                this.player.y = 350
                this.capturedOnes.han = true
            }
        }
    }

    gameWin() {
        if (this.capturedOnes.yoda === true
            && this.capturedOnes.luke === true
            && this.capturedOnes.leia === true
            && this.capturedOnes.han === true) {
            this.stop()
            document.getElementById('game').style.visibility = 'hidden'
            document.getElementById('gameWin').style.visibility = 'visible'

            this.rebellionDefeated.play()
            this.imperialMarch.play()
        }
    }

    gameOver() {
        this.vaderDefeated.play()
        this.stop()
        document.getElementById('game').style.visibility = 'hidden'
        document.getElementById('gameOver').style.visibility = 'visible'

        this.gameOverTheme.play()
    }
}


