class Car {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 450;
        this.y = 300;

        this.vx = -2;

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
        this.x += this.vx
    }
}
