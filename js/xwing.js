class XWing extends Vehicle {

    constructor (ctx, x, y, vx) {
        super(ctx, x, y, vx)

        this.w = 25;
        this.h = 25;

        this.img = new Image();
        if (this.vx > 0) {
            this.img.src = 'assets/img/xwing-right.png';
        }
        if (this.vx < 0) {
            this.img.src = 'assets/img/xwing-left.png';
        }
    }
}