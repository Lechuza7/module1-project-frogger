class Yoda extends Rebel {

    constructor(ctx) {
        super(ctx)

        this.x = 50
        this.y = 55

        this.w = 15;
        this.h = 15;

        this.img = new Image();
        this.img.src = 'assets/img/yoda.png';
    }
}