'use strict';
import Engine from './shape.js'
import ProgressBar from './progress.js'
import Hearts from './hearts.js'
import DoubleButton from './doubutton.js'
import Text from './text.js'

function transition(from, to, outspeed, inspeed) {
    let promise = new Promise((resolve) => {
        outspeed = outspeed || 2000
        inspeed = inspeed || 4000
        if(from != null) {
            from.fadeOut(outspeed)
        }
        to.fadeIn(inspeed, resolve)
    })
    return promise
}

$(function() {

    let canvas = $('#canvas')
    let wrapper = $('#wrapper')
    let progressbar = $('#progressbar')
    let fillText = $('#fill-text')
    let fill = $('#fill')
    let tip = $('#tip')
    let textArea = $('#textarea')
    let chartext = $('#char-text')
    let buttonArea = $('#buttonarea')
    let buttonPos = $('.button.positive')
    let textPos = $('#positive-text')
    let buttonNeg = $('.button.negtive')
    let textNeg = $('#negtive-text')
    function clear() {
        canvas[0].getContext('2d').clearRect(0, 0, canvas[0].width, canvas[0].height);
        canvas.hide(1)
        textArea.hide(1)
        buttonArea.hide(1)
    }

    let engine = new Engine(canvas[0]);
    let promise = new Promise((resolve) => { resolve(); });
    let hearts = new Hearts(canvas[0])
    let progress = new ProgressBar(wrapper, progressbar, fill, fillText, tip, "正在进入多多内心世界...")
    let doubleButton = new DoubleButton(buttonArea, buttonPos, textPos, buttonNeg, textNeg)
    let mytext = new Text(textArea, chartext)
    
    canvas.on('click', start);
    
    function start() {
        clear()
        progress.init()
        canvas.off('click')
        promise = promise.then(() => transition(null, wrapper))
        .then(() => progress.move())
        .then(() => transition(wrapper, textArea, 2000, 2000))
        .then(() => mytext.handle("这是多多"))
        .then(() => transition(textArea, canvas, 1000, 2000))
        .then(() => engine.toPicture("littlepig.jpg"))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => transition(canvas, textArea, 1000, 1000))
        .then(() => mytext.handle("多多心中的思婕"))
        .then(() => transition(textArea, canvas))
        for(let i = 1; i <= 10; ++i) {
            promise = promise.then(() => engine.toPicture('pic/' + i + '.png')).then(() => engine.shake())
        }
        promise.then(() => engine.clear())
        .then(() => transition(canvas, buttonArea))
        .then(() => doubleButton.handle("再看十个", "跳过"))
        .then(() => transition(buttonArea, canvas)
        .then(() => {
            let promise = Promise.resolve()
            for(let i = 11; i <= 20; ++i) {
                promise = promise.then(() => engine.toPicture('pic/' + i + '.png')).then(() => engine.shake())
            }
            return promise
        })
        .then(() => engine.clear())
        .then(() => transition(canvas, buttonArea)),
        () => transition(buttonArea, buttonArea, 1000, 2000))
        .then(() => doubleButton.handle('接受多多', 'accept duoduo'))
        .then(() => Promise.resolve(), () => Promise.resolve())
        .then(() => transition(buttonArea, canvas))
        .then(() => hearts.drawHearts())
        .then(() => transition(null, textArea))
        .then(() => mytext.handle("好耶！"))
    }
    start();
});
