class Rebel {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x
        this.y = y

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

    collides(player) {
        const colX = this.x <= player.x + player.w &&
            this.x + this.w > player.x;

        const colY = this.y + this.h > player.y &&
            this.y < player.y + player.h;

        return colX && colY;
    }
}