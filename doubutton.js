function DoubleButton(buttonArea, buttonPos, textPos, buttonNeg, textNeg) {
    this.buttonArea = buttonArea
    this.buttonPos = buttonPos
    this.buttonNeg = buttonNeg
    this.textPos = textPos
    this.textNeg = textNeg
}

DoubleButton.prototype.handle = function(textPos, textNeg) {
    let promise = new Promise((resolve, reject) => {
        this.textPos.text(textPos)
        this.textNeg.text(textNeg)
        this.buttonPos.on('click', () => {
            this.clear()
            resolve()
        })
        this.buttonNeg.on('click', () => {
            this.clear()
            reject()
        })
    })
    return promise
}

DoubleButton.prototype.clear = function() {
    this.buttonPos.off('click')
    this.buttonNeg.off('click')
    this.textPos.text("")
    this.textNeg.text("")
}

export default DoubleButton
