class money {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.picture = image;
        this.beingPressed = false;
        this.image;
    }
    draw() {
        this.image = image(this.picture, this.x, this.y);
    }
}
/*
value=3343
if(value>1000){
    value-1000
    

}else if(value>500){
    value - 500
    
}
floor(3324/1000)
// output: 3
*/