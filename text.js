function Text(textArea, charText) {
    this.textArea = textArea
    this.charText = charText
}

Text.prototype.handle = function(text) {
    let promise = new Promise((resolve) => {
        let count = 0;
        let curText = ""
        let interval = setInterval(() => {
            this.charText.text(curText);
            if(count == text.length) {
                clearInterval(interval)
                interval = null
                setTimeout(() => {
                    this.clear()
                }, 2000)
                resolve()
            }
            curText += text.charAt(count)
            count += 1
        }, 700)
    })
    return promise
}

Text.prototype.clear = function() {
    this.charText.text("")
}

export default Text
