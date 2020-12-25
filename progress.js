var progressbar = {
    fill: document.getElementById("fill-text"),
    tip: document.getElementById("tip"),
    bar: document.getElementById("progressbar"),
    wrapper: document.getElementById('wrapper'),
    canvas: document.getElementById('canvas'),
    reset: function() {
            this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.style.display = "none"
            this.wrapper.style.background = 'rgba(108, 182, 204, 1)'
            this.wrapper.style.display='block'
            this.bar.style.display = "block"
            this.tip.innerHTML = ""
            this.fill.innerHTML = ""
    },
    init: function() {
        var promise = new Promise((resolve) => {

            this.reset()
            var count = 0;
            let text = "正在进入多多内心..."
            let timer = setInterval(() => {
                if(count % 9 == 0) {
                    this.tip.innerHTML += text.charAt(count / 9)
                }
                count++;
                this.fill.innerHTML=count + '%';
                if(count===100){
                    clearInterval(timer)
                    timer = null
                    let step = 0.05
                    let cur = 1
                    let fadetimer = setInterval(() => {
                        this.wrapper.style.background = 'rgba(108, 182, 204,' + cur +')'
                        cur -= step;
                        if(cur <= 0.40) {
                            this.bar.style.display = "none"
                        }
                        if(cur <= 0) {
                            clearInterval(fadetimer)
                            fadetimer = null
                            this.wrapper.style.display = "none"
                            this.canvas.style.display = "block"
                            resolve()
                        }

                    }, 100)
                }
            }, 50);
        })
        return promise;
    }
};
