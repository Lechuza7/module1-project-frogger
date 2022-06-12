class Falcon extends Vehicle {

    constructor (ctx, x, y, vx) {
        super(ctx, x, y, vx)

        this.w = 50;
        this.h = 25;

        this.img = new Image();
        if (this.vx > 0) {
            this.img.src = 'assets/img/falcon-right.png';
        }
        if (this.vx < 0) {
            this.img.src = 'assets/img/falcon-left.png';
        }
    }
}