class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);
    
        this.player = new Player(ctx);
        
        this.lane1 = [];
        this.lane2 = [];
        this.lane3 = [];
        this.lane4 = [];
        this.lane5 = [];

        this.river1 = [];
    
        this.tick1 = 0;
        this.tick2 = 0;
        this.tick3 = 0;
        this.tick4 = 0;
        this.tick5 = 0;
        this.tick6 = 0;

        this.interval = null;

        this.setListeners();
    }

    start() {
        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.checkPlatform();
            this.checkCollisions1();
            

            this.tick1++;
            this.tick2++;
            this.tick3++;
            this.tick4++;
            this.tick5++;
            this.tick6++;

            if (this.tick1 > Math.random() * 240 + 200) {
                this.tick1 = 0;
                this.addVehicle1();
            }

            if (this.tick2 > Math.random() * 240 + 200) {
                this.tick2 = 0;
                this.addVehicle2();
            }

            if (this.tick3 > Math.random() * 240 + 200) {
                this.tick3 = 0;
                this.addVehicle3();
            }

            if (this.tick4 > Math.random() * 240 + 200) {
                this.tick4 = 0;
                this.addVehicle4();
            }

            if (this.tick5 > Math.random() * 240 + 200) {
                this.tick5 = 0;
                this.addVehicle5();
            }

            if (this.tick6 > Math.random() * 240 + 200) {
                this.tick6 = 0;
                this.addTrunk();
            }

        }, 1000 / 60);
    }
    
    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.lane1 = this.lane1.filter((vehicle) => vehicle.isVisible());
        this.lane2 = this.lane2.filter((vehicle) => vehicle.isVisible());
        this.lane3 = this.lane3.filter((vehicle) => vehicle.isVisible());
        this.lane4 = this.lane4.filter((vehicle) => vehicle.isVisible());
        this.lane5 = this.lane5.filter((vehicle) => vehicle.isVisible());
        this.river1 = this.river1.filter((trunk) => trunk.isVisible());
    }

    draw() {
        this.background.draw();
        this.river1.forEach(trunk => trunk.draw());
        this.player.draw();
        this.lane1.forEach(vehicle1 => vehicle1.draw());
        this.lane2.forEach(vehicle2 => vehicle2.draw());
        this.lane3.forEach(vehicle3 => vehicle3.draw());
        this.lane4.forEach(vehicle4 => vehicle4.draw());
        this.lane5.forEach(vehicle5 => vehicle5.draw());
    }

    move() {
        this.player.move();
        this.lane1.forEach(vehicle1 => vehicle1.move());
        this.lane2.forEach(vehicle2 => vehicle2.move());
        this.lane3.forEach(vehicle3 => vehicle3.move());
        this.lane4.forEach(vehicle4 => vehicle4.move());
        this.lane5.forEach(vehicle5 => vehicle5.move());
        this.river1.forEach(trunk => trunk.move());
        
    }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            this.player.keyDown(e.keyCode);
        })
    }

    addVehicle1() {
        const vehicle1 = new Lane1(this.ctx);
        this.lane1.push(vehicle1);
    }

    addVehicle2() {
        const vehicle2 = new Lane2(this.ctx);
        this.lane2.push(vehicle2);
    }
    addVehicle3() {
        const vehicle3 = new Lane3(this.ctx);
        this.lane3.push(vehicle3);
    }
    addVehicle4() {
        const vehicle4 = new Lane4(this.ctx);
        this.lane4.push(vehicle4);
    }

    addVehicle5() {
        const vehicle5 = new Lane5(this.ctx);
        this.lane5.push(vehicle5);
    }

    addTrunk() {
        const trunk = new River1(this.ctx);
        this.river1.push(trunk);
    }

    checkCollisions1() {
        this.lane1.forEach((vehicle) => {
            if (vehicle.collides(this.player)) {
                this.stop()
                }
        })

        this.lane2.forEach((vehicle) => {
            if (vehicle.collides(this.player)) {
                this.stop()
                }
        })

        this.lane3.forEach((vehicle) => {
            if (vehicle.collides(this.player)) {
                this.stop()
                }
        })
        
        this.lane4.forEach((vehicle) => {
            if (vehicle.collides(this.player)) {
                this.stop()
                }
        })

        this.lane5.forEach((vehicle) => {
            if (vehicle.collides(this.player)) {
                this.stop()
                }
        })
    }

    checkPlatform() {
        
        this.river1.forEach((trunk) => {
            if (trunk.collides(this.player)) {
                this.player.x += trunk.vx
            }
        })
    }
};

