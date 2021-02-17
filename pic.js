'use strict'

function ShowPic(name, canvas) {
    this.src = name
    this.canvas = canvas
    this.ctx =canvas.getContext('2d')
    this.interval = Math.random() * 10
    this.cw = Math.random()
}

ShowPic.prototype.show = function() {
    var promise = new Promise((resolve) => {
        let img = new Image()
        img.src = "pic/" + this.src + ".png"
        img.onload = () => {
            setTimeout(() => {
                let width = img.width * this.cw;
                let height = width * (img.height / img.width)
                if(width > this.canvas.width * 0.3) {
                    width = this.canvas.width * 0.3
                    height = width * (img.height / img.width)
                }
                if(height > this.canvas.height * 0.3) {
                    height = this.canvas.height * 0.3
                    width = height * (img.width / img.height)
                }
                let sx = Math.random() * (this.canvas.width - width)
                let sy = Math.random() * (this.canvas.height - height)
                this.ctx.drawImage(img, sx, sy, width, height)
                resolve()
            }, this.interval * 1000)
        }
    })
    return promise

}
