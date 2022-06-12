class River {
    constructor(ctx, x, y, freqs, vx) {
        this.ctx = ctx;
       
        this.x = x;
        this.y = y;

        this.vx = vx

        this.freqs = freqs

        this.platforms = []

        this.ticks = {
            tie: 0,
            tie2: 0,
            tie3: 0
        }    
    }

    createPlatforms() {
        this.ticks.tie++
        this.ticks.tie2++
        this.ticks.tie3++

        if (this.ticks.tie > Math.random() * this.freqs.tie + 200 && !this.checkDistance()) {
            this.ticks.tie = 0;
            this.platforms.push(new Tie(this.ctx, this.x, this.y, this.vx));
        }

        if (this.ticks.tie2 > Math.random() * this.freqs.tie2 + 400 && !this.checkDistance()) {
            this.ticks.tie2 = 0;
            this.platforms.push(new Tie2(this.ctx, this.x, this.y, this.vx));
        }

        if (this.ticks.tie3 > Math.random() * this.freqs.tie3 + 300 && !this.checkDistance()) {
            this.ticks.tie3 = 0;
            this.platforms.push(new Tie3(this.ctx, this.x, this.y, this.vx));
        }
        
    }

    checkDistance() {
        return this.platforms.some((platform) => {
            if (platform.vx < 0 && platform.x > this.ctx.canvas.width - platform.w - 70) {
                
                return true
            }
            if (platform.vx > 0 && platform.x < platform.w + 70) {
                
                return true
            }
            
            return false
        })
    }

    draw() {
        this.platforms.forEach(platform => platform.draw());
    }

    move() {  
        this.platforms.forEach(platform => platform.move());  
    }

    clear() {
        this.platforms = this.platforms.filter((platform) => platform.isVisible());
    }    
}