class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 175;
        this.y = 340;
        this.w = 25;
        this.h = 25;

        this.img = new Image();
        this.img.src = 'assets/img/frog-beta.jpg';
    };

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h,
        );
    };

    keyDown(key) {
        console.log('keydown')
        if (key === UP) {
            console.log('inside up')
            this.y -= 20;
        }
        if (key === DOWN) {
            this.y += 20;
        }
        if (key === LEFT) {
            console.log('inside up')
            this.x -= 20;
        }
        if (key === RIGHT) {
            this.x += 20;
        }

    }
}