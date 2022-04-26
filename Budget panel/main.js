function preload() {
    kr50 = loadImage('50dkk.jpg');
    kr100 = loadImage('100dkk.jpg');
    kr200 = loadImage('200dkk.jpg');
    kr500 = loadImage('500dkk.jpg');
    kr1000 = loadImage('1000dkk.jpg');
    editimagepreload = loadImage("Edit.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //dkkobj1000=new Kasse(25,25,100)
    objArray = []
    x = new AdderBox(25, 25, 100)
    //l = new money(25,25,kr1000)
}

function draw() {
    background(210);
    x.draw()
    x.clickOn(objArray)
    for (i = 0; i < objArray.length; i++) {
        objArray[i].draw()
    }
    
    //l.draw()

}
function mousePressed() {
    //dkkobj1000.dragandDrop()
}