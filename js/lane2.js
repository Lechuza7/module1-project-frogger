class Lane2 {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = -50;
        this.y = 300;

        this.vx = 1.5;

        this.w = 50;
        this.h = 25;

        this.img = new Image();
        this.img.src = 'assets/img/truck.png';
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h,
        );
    };

    move() {
        this.x += this.vx
    }

    isVisible() {
        return this.x < 350
    }

    collides(player) {
        const colX = this.x <= player.x + player.w &&
                     this.x + this.w > player.x;
        
        const colY = this.y + this.h > player.y &&
                     this.y < player.y + player.h;

        return colX && colY;
    }
}