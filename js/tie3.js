class Tie3 extends Platform {

    constructor (ctx, x, y, vx) {
        super(ctx, x, y, vx)

        this.w = 75;
        this.h = 25;

        this.img = new Image();
        this.img.src = 'assets/img/tie3.png';
        
    }
}