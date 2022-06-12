class Speeder extends Vehicle {

    constructor (ctx, x, y, vx) {
        super(ctx, x, y, vx)

        this.w = 20;
        this.h = 20;

        this.img = new Image();
        if (this.vx > 0) {
            this.img.src = 'assets/img/speeder-right.png';
        }
        if (this.vx < 0) {
            this.img.src = 'assets/img/speeder-left.png';
        }
    }
}