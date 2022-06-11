class Vehicle {
    constructor(ctx, x, y, vx) {
        this.ctx = ctx;

        this.x = x
        this.y = y
        this.vx = vx
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h,
        );
    }

    move() {
        this.x += this.vx;
    }

    isVisible() {
        if (this.vx > 0) {
            return this.x < 350
        }
        if (this.vx < 0) {
            return this.x + this.w > 0
        }
    }

    collides(player) {
        const colX = this.x <= player.x + player.w &&
                     this.x + this.w > player.x;
        
        const colY = this.y + this.h > player.y &&
                     this.y < player.y + player.h;

        return colX && colY;
    }
}