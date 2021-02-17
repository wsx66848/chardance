function ProgressBar(wrapper, progressbar, fill, fillText, tip, text) {
    this.fill = fill
    this.tip = tip
    this.bar = progressbar
    this.wrapper = wrapper
    this.fillText = fillText
    this.text = text
    this.init()
}

ProgressBar.prototype.init = function() {
    this.progress(0)
    this.tip[0].innerHTML = ""
    this.fillText[0].innerHTML = ""
}

ProgressBar.prototype.move = function() {
    let promise = new Promise((resolve) => {
        let count = 0;
        let text = this.text 
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
                resolve()
            }
        }, 100);
    })
    return promise;

}

ProgressBar.prototype.progress = function(progress) {
   this.fill.css('width', progress + "%")

}

export default ProgressBar
