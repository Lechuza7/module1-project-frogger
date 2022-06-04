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
}