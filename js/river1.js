class River1 {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 375;
        this.y = 75;
        this.vx = -1;
        this.w = 25;
        this.h = 25;

        this.img = new Image();
        this.img.src = 'assets/img/red-car3.png';
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
        return this.x + this.w > 0;
    }

    collides(player) {
        const colX = this.x <= player.x + player.w &&
                     this.x + this.w > player.x;
        
        const colY = this.y + this.h > player.y &&
                     this.y < player.y + player.h;

        return colX && colY;
    }
}