(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    var mycanvas = new Canvas(canvas)
    
    document.getElementById('canvas').addEventListener('canvas', start);
    
    function start() {
        document.getElementById('canvas').removeEventListener('click', start);
        promise.then(() => progressbar.init())
        .then(() => engine.toText('欧'))
        .then(() => engine.shake())
        .then(() => engine.toText('思'))
        .then(() => engine.shake())
        .then(() => engine.toText('婕'))
        .then(() => engine.shake())
        .then(() => engine.toText('L'))
        .then(() => engine.shake())
        .then(() => engine.toText('O'))
        .then(() => engine.shake())
        .then(() => engine.toText('V'))
        .then(() => engine.shake())
        .then(() => engine.toText('E'))
        .then(() => engine.shake())
        .then(() => engine.toText('I LOVE U'))
        .then(() => engine.shake())
        .then(() => engine.toText('merry christmas'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => {
            let ctx = canvas.getContext('2d')
            let img = new Image()
            img.src = "jierui.jpg"
            img.onload = () => {
                let sx = canvas.width / 2 - img.width / 2
                let sy = canvas.height / 2 - img.height / 2
                ctx.drawImage(img, sx, sy, img.width, img.height)
                mycanvas.drawHearts()
            }
        })
        .then(() => document.getElementById('canvas').addEventListener('click', start));
    }
    start();
})();
