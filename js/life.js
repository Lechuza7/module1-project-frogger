class Life {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x
        this.y = y

        this.w = 20
        this.h = 25

        this.img = new Image();
        this.img.src = 'assets/img/lifesaber2.jpg'

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
}