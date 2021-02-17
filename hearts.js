'use strict'
import {rand, hsla} from './common.js'
import {heart} from './point.js'

function Position(cw, ch, x, y) {
    this.cw = cw
    this.ch = ch
    this.offSetx = x || 0
    this.offSety = y || 0
    this.init()

}
Position.prototype = {
    init: function () {
        if (this.offSetx == 0 && this.offSety == 0) {
            this.offSetx = rand(20, this.cw - 20)
            this.offSety = rand(20, this.ch - 20)
        }
    }
}

function Hearts(canvas) {
    this.heartNum = 66
    this.hearts = []
    this.length = 0
    this.canvas = canvas
    this.cw = canvas.width;
    this.ch = canvas.height;

    this.ctx = canvas.getContext("2d");
    this.init()

}
Hearts.prototype = {
    init: function () {
        while (this.heartNum--) {
            let p = new Position(this.cw, this.ch)
            this.hearts.push(new heart(p.offSetx, p.offSety, 
                (Math.random() + 0.3) * rand(1, 5), 
                new hsla(0, 100, rand(30, 80), 0.6)))
        }
        this.length = this.hearts.length

    },
    drawHearts: function () {
        var promise = new Promise((resolve) => {
            let i = this.length
            while (i--) {
                this.hearts[i].render(this.ctx)
            }
            resolve()
        })
        return promise
    }

}

export default Hearts

