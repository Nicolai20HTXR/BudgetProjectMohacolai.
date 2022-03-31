class Kasse {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.pengeInput = createInput('')
        this.pengeInput.position(this.x + 25, this.y + 10)
        this.pengeInput.size(100)
        this.textInput = ""
    }
    draw() {
        //rColor = 
        //fill(rColor,gColor,bColor);
        rect(this.x, this.y, this.r * 2, this.r * 8, 25);
        //første kasse
        rect(this.x, this.y, this.r * 2, this.r, 25);
        
        
        text(this.textInput,this.x+this.r/2,this.y+this.r/2)
        this.pengeInput.changed(() => {
            this.textInput = this.pengeInput.value()
            this.pengeInput.remove()
        }) 
    }
}

class AdderBox{
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.beingPressed = false
    }
    draw() {
        square(this.x, this.y, this.r, this.r / 4)
        push()
        strokeWeight(this.r / 16)
        line(this.x + this.r / 2, this.y + this.r / 6, this.x + this.r / 2, this.y + this.r - this.r / 6)
        line(this.x + this.r / 6, this.y + this.r / 2, this.x + this.r - this.r / 6, this.y + this.r / 2)
        pop()
        if (this.x + this.r > width) {
            resizeCanvas(width + 200, height)
        }
    }
    clickOn(array) {
        if (mouseX > this.x && mouseX < this.x + this.r && mouseY > this.y && mouseY < this.y + this.r && mouseIsPressed && !this.beingPressed) {

            this.mousePosColor = get(mouseX, mouseY)
            this.boolPosColor = []

            for (i = 0; i < this.mousePosColor.length - 1; i++) {
                if (this.mousePosColor[i] == 255 || this.mousePosColor[i] == 0) {
                    this.boolPosColor[i] = true;
                } else {
                    this.boolPosColor[i] = false;
                }
            }

            function boolSum(arr){
                return arr.every(Boolean)
            }
                

            if(boolSum(this.boolPosColor)){
                this.x += 200
                this.newKasse = new Kasse(this.x - 200, this.y, 100)
                array.push(this.newKasse)

            }


        }
        this.beingPressed = mouseIsPressed
    }
}