function inherits(Child, Parent) {
    let F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function rand(min, max) {
    return ~~(Math.random() * (max - min + 1) + min)
}

function hsla(h, s, l, a) {
    this.h = h
    this.s = s
    this.l = l
    this.a = a
}

hsla.prototype.toString = function() {
    return "hsla(" + this.h + "," + this.s + "%," + this.l + "%, " + this.a + ")"
}

function rgba(r, g, b, a) {
    this.r = r
    this.g = g
    this.b = b 
    this.a = a
}

rgba.prototype.toString = function() {
    return "rgba(" + this.r + "," + this.g + "," + this.b + ", " + this.a + ")"
}


export {inherits}
export {rand}
export {hsla}
export {rgba}