class Kasse {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }
    draw() {
        //rColor = 
        //fill(rColor,gColor,bColor);
        rect(this.x, this.y, this.r * 2, this.r*8, 25);
            //første kasse
        rect(this.x, this.y, this.r * 2, this.r, 25);

    }
}

class AdderBox extends Kasse {
    constructor(x, y, r) {
        super(x, y, r)
        this.beingPressed = false
    }
    draw() {
        square(this.x, this.y, this.r, this.r / 4)
        push()
        strokeWeight(this.r/16)
        line(this.x+this.r/2, this.y+this.r/6, this.x+this.r/2, this.y+this.r-this.r/6)
        line(this.x+this.r/6, this.y+this.r/2, this.x+this.r-this.r/6, this.y+this.r/2)
        pop()
        if(this.x+this.r>width){
            resizeCanvas(width+200, height)
        }
    }
    clickOn(array) {
        if (mouseX > this.x && mouseX < this.x + this.r && mouseY > this.y && mouseY < this.y + this.r && mouseIsPressed && !this.beingPressed){
            this.x+=200
            this.newKasse = new Kasse(this.x-200,this.y,100)
            array.push(this.newKasse)
        }
        this.beingPressed = mouseIsPressed
    }
}