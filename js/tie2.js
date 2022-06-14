class Tie2 extends Platform {

    constructor(ctx, x, y, vx) {
        super(ctx, x, y, vx)

        this.w = 50;
        this.h = 25;

        this.img = new Image();
        this.img.src = 'assets/img/tie2.png';

    }
}