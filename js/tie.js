class Tie extends Platform {

    constructor(ctx, x, y, vx) {
        super(ctx, x, y, vx)

        this.w = 25;
        this.h = 25;

        this.img = new Image();
        this.img.src = 'assets/img/tie.png';

    }
}