class Lane {
    constructor(ctx, x, y, freqs, vx) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;

        this.vx = vx

        this.freqs = freqs

        this.vehicles = []

        this.ticks = {
            xwing: 0,
            falcon: 0,
            speeder: 0
        }
    }

    createVehicles() {
       
    

        

            this.ticks.xwing++
            this.ticks.falcon++
            this.ticks.speeder++

            if (this.ticks.xwing > Math.random() * this.freqs.xwing + 200 && !this.checkDistance()) {
            
                this.ticks.xwing = 0;
                this.vehicles.push(new XWing(this.ctx, this.x, this.y, this.vx));
            }

            if (this.ticks.falcon > Math.random() * this.freqs.falcon + 400 && !this.checkDistance()) {
                
                this.ticks.falcon = 0;
                this.vehicles.push(new Falcon(this.ctx, this.x, this.y, this.vx));
            }

            if (this.ticks.speeder > Math.random() * this.freqs.speeder + 300 && !this.checkDistance()) {
                this.ticks.speeder = 0;
                this.vehicles.push(new Speeder(this.ctx, this.x, this.y, this.vx));
            }
    

    }

    checkDistance() {
        return this.vehicles.some((vehicle) => {
            if (vehicle.vx < 0 && vehicle.x > this.ctx.canvas.width - vehicle.w - 40) {
                
                return true
            }
            if (vehicle.vx > 0 && vehicle.x < vehicle.w + 40) {
                
                return true
            }
            
            return false
        })
    }

    draw() {
        this.vehicles.forEach(vehicle => vehicle.draw());
    }

    move() {
        this.vehicles.forEach(vehicle => vehicle.move());
    }

    clear() {
        this.vehicles = this.vehicles.filter((vehicle) => vehicle.isVisible());
    }
}