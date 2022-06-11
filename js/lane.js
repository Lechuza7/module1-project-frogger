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

        if (this.ticks.xwing > Math.random() * this.freqs.xwing + 200) {
            this.ticks.xwing = 0;
            this.vehicles.push(new XWing(this.ctx, this.x, this.y, this.vx));
        }

        if (this.ticks.falcon > Math.random() * this.freqs.falcon + 400) {
            this.ticks.falcon = 0;
            this.vehicles.push(new Falcon(this.ctx, this.x, this.y, this.vx));
        }

        if (this.ticks.speeder > Math.random() * this.freqs.speeder + 300) {
            this.ticks.speeder = 0;
            this.vehicles.push(new Speeder(this.ctx, this.x, this.y, this.vx));
        }
        
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

    /*collides(player) {
        this.vehicles.forEach(vehicle => {
            const colX = vehicle.x <= player.x + player.w &&
            vehicle.x + vehicle.w > player.x;
        
            const colY = vehicle.y + vehicle.h > player.y &&
            vehicle.y < player.y + player.h;

            return colX && colY;
        })  
    }*/

    /*checkCollisions() {
        this.vehicles.forEach((vehicle) => {
            vehicle.collides()
        })
    }*/
    
}