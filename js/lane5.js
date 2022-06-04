class Lane5 {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 375;
        this.y = 225;

        this.vx = -3;

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
    };

    move() {
        this.x += this.vx
    }

    isVisible() {
        return this.x + this.w > 0
    }
}