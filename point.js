"use strict"
import {inherits} from '/common.js'

function point(x, y, r, fillStyle)
{
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
    this.currentX = x;
    this.currentY = y;
    this.state = 0;
    this.r = r;
    this.radius = r
    this.fillStyle = fillStyle
    // -1 : dispearing
    // 0  : keeping
    // 1  : showing up
};

point.prototype.render = function (context) {
    context.beginPath();
    context.fillStyle = this.fillStyle.toString() 
    context.arc( this.currentX, this.currentY, this.r, 0, Math.PI * 2);
    context.closePath();
    context.fill();
};

point.prototype.update = function (ratio) {
    this.currentX = ratio * (this.targetX - this.x) + this.x;
    this.currentY = ratio * (this.targetY - this.y) + this.y;
    if (this.state === 0) {

    } else if (this.state === 1) {
        this.r = ratio * this.radius;
    } else {
        this.r = (1 - ratio) * this.radius;
    }
};

point.prototype.shake = function () {
    this.currentX = this.targetX + Math.random() * 2;
    this.currentY = this.targetY + Math.random() * 2;
};

function heart(x, y, r, fillStyle) {
    point.call(this, x, y, r, fillStyle)
    this.points = []
    this.length = 0
    for (let i = 0; i < 2*Math.PI; i += 2*Math.PI/100) {
        let x = 16 * Math.pow(Math.sin(i), 3)
        let y = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i)
        this.points.push([x, y])
        // x = 16 sin^3 t
        // y = 13 cos t - 5 cos 2t - 2 cos 3t - cos 4t
        //http://www.wolframalpha.com/input/?i=x+%3D+16+sin%5E3+t%2C+y+%3D+(13+cos+t+-+5+cos+2t+-+2+cos+3t+-+cos+4t)
    }
    this.length = this.points.length
}

inherits(heart, point)

heart.prototype.get = function(i) {
    return this.points[i]
}

heart.prototype.render = function (context) {
    context.save()
    context.beginPath()
    context.translate(this.currentX,this.currentY)
    context.fillStyle = this.fillStyle.toString()
    context.scale(this.r * 0.2,this.r * 0.2)
    context.moveTo(this.get(0)[0],-this.get(0)[1])
    for(let i = 1 ;i < this.length ; i++){
        context.lineTo(this.get(i)[0],-this.get(i)[1])
    }
    context.closePath()
    context.fill()
    context.restore()
}

export {point}
export {heart}