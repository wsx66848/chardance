'use strict';
import Engine from './shape.js'
import ProgressBar from './progress.js'
import Hearts from './hearts.js'

function transition(from, to, outspeed, inspeed) {
    let promise = new Promise((resolve) => {
        outspeed = outspeed || 2000
        inspeed = inspeed || 3000
        if(from != null) {
            from.fadeOut(outspeed)
        }
        to.fadeIn(3000, resolve)
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
    let buttonArea = $('#buttonarea')
    let buttonPos = $('.button.positive')
    let textPos = $('#positive-text')
    let buttonNeg = $('.button.negtive')
    let textNeg = $('#positive-text')
    function clear() {
        canvas[0].getContext('2d').clearRect(0, 0, canvas[0].width, canvas[0].height);
        canvas.hide()
        textArea.hide()
        buttonArea.hide()
    }

    let engine = new Engine(canvas[0]);
    let promise = new Promise((resolve) => { resolve(); });
    let hearts = new Hearts(canvas[0])
    let progress = new ProgressBar(wrapper, progressbar, fill, fillText, tip, "正在进入多多内心世界...")
    
    canvas.on('click', start);
    
    function start() {
        clear()
        progress.init()
        canvas.off('click', start)
        promise.then(() => transition(null, wrapper))
        .then(() => progress.move())
        /*
        .then(() => engine.toPicture('littlepig.jpg'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => hearts.drawHearts())
        .then(() => document.getElementById('canvas').addEventListener('click', start))
        */
    }
    start();
});
