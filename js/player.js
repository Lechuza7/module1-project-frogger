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
    }

    move() {
        
        if (this.x + this.w >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w
        }

        if (this.x <= 0) {
            this.x = 0
        }

        if (this.y + this.h >= this.ctx.canvas.height) {
            this.y = this.ctx.canvas.height - this.h
        }

        if (this.y <= 0) {
            this.y = 0
        }
    }

    keyDown(key) {
        if (key === UP) {
            this.y -= 25;
            this.img.src = 'assets/img/frog-beta.jpg';
        }
        if (key === DOWN) {
            this.y += 25;
            this.img.src = 'assets/img/frog-down-beta.png';
        }
        if (key === LEFT) {
            this.x -= 25;
            this.img.src = 'assets/img/frog-left-beta.png';
        }
        if (key === RIGHT) {
            this.x += 25;
            this.img.src = 'assets/img/frog-right-beta.png';
        }

    }
}