class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 175;
        this.y = 350;
        this.w = 20;
        this.h = 25;

        this.img = new Image();
        this.img.src = 'assets/img/vader-up.png';
    };

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
        if (this.x + this.w >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w
        }

        if (this.x <= 0) {
            this.x = 0
        }

        if (this.y + this.h >= 375) {
            this.y = 375 - this.h 
        }

        if (this.y <= 50) {
            this.y = 50
        }
    }

    keyDown(key) {
        if (key === UP) {
            this.y -= 25;
            this.img.src = 'assets/img/vader-up.png';
        }
        if (key === DOWN) {
            this.y += 25;
            this.img.src = 'assets/img/vader-down.png';
        }
        if (key === LEFT) {
            this.x -= 25;
            this.img.src = 'assets/img/vader-left.png';
        }
        if (key === RIGHT) {
            this.x += 25;
            this.img.src = 'assets/img/vader-right.png';
        }

    }
}