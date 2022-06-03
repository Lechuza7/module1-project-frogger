const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    if (game.interval) {
        game.stop();
        btn.innerText = 'TRY';
    } else {
        game.start();
        btn.innerText = 'STOP';
    }
});