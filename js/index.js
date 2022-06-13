const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

const start = document.getElementById('start');

start.addEventListener('click', function() {
    if (game.interval) {
        game.stop();
        start.innerText = 'PLAY';
    } else {
        game.start();
        start.innerText = 'PAUSE';
    }
});

const restart = document.getElementById('restart');

restart.addEventListener('click', function() {
        window.location.reload();     
}); 

const reload = document.getElementById('reload');

reload.addEventListener('click', function() {
        window.location.reload();   
});
