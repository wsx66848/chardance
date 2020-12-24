'use strict'
function Point(x,y){
    this.x = x
    this.y = y
    this.scale = Math.random()*rand(1,3)
        
}
Point.prototype={
    mul:function(){
        this.x *= this.scale
        this.y *= this.scale
                
    }
        
}
function rand(min,max){
            return ~~(Math.random()*(max-min+1)+min)
        
}
function Position (cw,ch,x,y){
            this.cw=cw
            this.ch=ch
            this.offSetx = x||0
            this.offSety = y||0
            this.init()
        
}
Position.prototype={
    init:function(){
        if(this.offSetx ==0 && this.offSety== 0){
                            this.offSetx = rand(20,this.cw-20)
                            this.offSety = rand(20,this.ch-20)
                        
        }
                
    }
        
}
function Heart (ctx,p) {
            this.points = []
            this.length = 0
            this.ctx = ctx
            this.position = p
            this.scale = (Math.random()+0.3)*rand(1,1.6)
            this.lightness = rand(30,80)
            this.init()
            // x = 16 sin^3 t
    //         // y = 13 cos t - 5 cos 2t - 2 cos 3t - cos 4t
    //                 // http://www.wolframalpha.com/input/?i=x+%3D+16+sin%5E3+t%2C+y+%3D+(13+cos+t+-+5+cos+2t+-+2+cos+3t+-+cos+4t)
    //                     
}
Heart.prototype = {
    init:function(){
        for (let i = 0; i < 2*Math.PI; i += 2*Math.PI/30) {
                            let x = 16 * Math.pow(Math.sin(i), 3);
                            let y = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i);
                            this.points.push(new Point(x, y));
                        
        }
                    this.length = this.points.length;
                
    },
    get: function(i) {
                    return this.points[i];
                
    },
    draw:function(){
                    this.ctx.save()
                    this.ctx.beginPath()
                    this.ctx.translate(this.position.offSetx,this.position.offSety)
                    this.ctx.fillStyle = 'hsla(0 ,100%,'+this.lightness+'%,0.6)'
                    this.ctx.lineWidtn = 2
                    this.ctx.lineCap = 'round'
                    this.ctx.scale(this.scale,this.scale)
                    this.ctx.moveTo(this.get(0).x,-this.get(0).y)
        for(let i = 1 ;i < this.length ; i++){
                            this.ctx.lineTo(this.get(i).x,-this.get(i).y)
                        
        }
                    this.ctx.closePath()
                    this.ctx.fill()
                    this.ctx.restore()
                
    }
        
}
function Canvas(canvas){
            this.heartNum = 66
            this.hearts=[]
            this.length = 0
            this.canvas = canvas
            this.cw = canvas.width;
            this.ch = canvas.height;

            this.ctx = canvas.getContext("2d");
            this.init()
        
}
Canvas.prototype={
    init:function(){
        while(this.heartNum--){
                            let p = new Position(this.cw,this.ch)
                            this.hearts.push(new Heart(this.ctx,p))
                        
        }
                    this.length = this.hearts.length
                
    },
    drawHearts:function(){
                    let i = this.length
        while(i--){
                            this.hearts[i].draw()
                        
        }
                
    }
        
}

