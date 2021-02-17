let progressbar = {
    fillText: $("#fill-text"),
    fill: $("#fill"),
    tip: $("#tip"),
    bar: $("#progressbar"),
    wrapper: $('#wrapper'),
    canvas: $('#canvas'),
    reset: function() {
            this.canvas[0].getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.fadeOut()
            this.wrapper.fadeIn()
            this.bar.fadeIn()
            this.progress(0)
            this.tip[0].innerHTML = ""
            this.fillText[0].innerHTML = ""
    },
    init: function() {
        var promise = new Promise((resolve) => {

            this.reset()
            let count = 0;
            let text = "正在进入多多内心2.0..."
            let textStep = (100 / text.length).toFixed()
            let timer = setInterval(() => {
                if(count % textStep == 0 && count / textStep < text.length) {
                    this.tip[0].innerHTML += text.charAt(count / textStep)
                }
                count++;
                this.fillText[0].innerHTML=count + '%';
                this.progress(count)
                if(count===100){
                    clearInterval(timer)
                    timer = null
                    let step = 0.05
                    count = count / 100
                    let fadetimer = setInterval(() => {
                        count -= step;
                        this.wrapper.fadeTo('fast', count)
                        if(count == 0.4) {
                            this.bar.fadeOut(2000)
                        }
                        if(count <= 0) {
                            clearInterval(fadetimer)
                            fadetimer = null
                            this.wrapper.fadeOut(2000)
                            this.canvas.fadeIn(3000, resolve)
                        }

                    }, 100)
                }
            }, 100);
        })
        return promise;
    },
    progress: function(progress) {
        this.fill.css('width', progress + "%")
    }

};

export default progressbar
