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
        .then(() => mycanvas.drawHearts())
        .then(() => {
            let promises = []
            for(let i = 1; i <= 40; i++) {
                promises.push(new ShowPic(i, canvas).show())
            }
            Promise.all(promises).then(() => document.getElementById('canvas').addEventListener('click', start));
        })
    }
    start();
})();
