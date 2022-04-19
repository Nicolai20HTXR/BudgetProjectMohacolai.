function preload(){
    dkk1000= loadImage('1000dkk.jpg')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //dkkobj1000=new Kasse(25,25,100)
    objArray = []
    x=new AdderBox(25,25,100)
}

function draw() {
    background(210);
    //dkkobj1000.draw()
    x.draw()
    x.clickOn(objArray)
    for(i = 0; i < objArray.length; i++){
        objArray[i].draw()
    }
    
    
}
function mousePressed(){
    //dkkobj1000.dragandDrop()
}