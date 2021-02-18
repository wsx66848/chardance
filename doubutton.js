function DoubleButton(buttonArea, buttonPos, textPos, buttonNeg, textNeg) {
    this.buttonArea = buttonArea
    this.buttonPos = buttonPos
    this.buttonNeg = buttonNeg
    this.textPos = textPos
    this.textNeg = textNeg
}

DoubleButton.prototype.handle = function(textPos, textNeg) {
    let promise = new Promise((resolve, reject) => {
        this.buttonPos.off('click')
        this.buttonNeg.off('click')
        this.textPos.text(textPos)
        this.textNeg.text(textNeg)
        this.buttonPos.on('click', resolve)
        this.buttonNeg.on('click', reject)
    })
    return promise
}

DoubleButton.prototype.clear = function() {
    let promise = new Promise((resolve) => {
        this.textPos.text("")
        this.textNeg.text("")
        resolve()
    })
    return promise
}

export default DoubleButton
