var progresswrapper = document.getElementById('wrapper')
var progressbar = {
    init: function(resolve) {
        var fill = document.getElementById("fill-text");
        var tip = document.getElementById("tip");
        var count = 0;
        let text = "正在进入多多内心..."
        let timer = setInterval(() => {
            if(count % 9 == 0) {
                tip.innerHTML += text.charAt(count / 9)
            }
            count++;
            fill.innerHTML=count + '%';
            if(count===100){
                clearInterval(timer)
                let step = 0.05
                let cur = 1
                let fadetimer = setInterval(() => {
                    progresswrapper.style.background = 'rgba(108, 182, 204,' + cur +')'
                    cur -= step;
                    if(cur <= 0.40) {
                        progresswrapper.style.display = "none"
                    }
                    if(cur <= 0) {
                        clearInterval(fadetimer)
                        document.getElementById('canvas').style.display = "block"
                        resolve()
                    }

                }, 100)
            }
        }, 50);
    }
};
