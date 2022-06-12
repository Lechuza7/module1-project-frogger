class Leia extends Rebel {

    constructor (ctx) {
        super(ctx)

        this.x = 200
        this.y = 50

        this.w = 20;
        this.h = 20;

        this.img = new Image();
        this.img.src = 'assets/img/leia.png';   
    }
}