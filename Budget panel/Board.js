class Kasse {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.editable = false;
        this.tempMoneyValue = 0;
        this.pengeInput = createInput("").attribute("maxlength", 11);
        this.pengeInput.size(100);
        this.pengeInput.position(
            this.x + (this.r * 2 - this.pengeInput.width) / 2,
            this.y + (this.r - this.pengeInput.height) / 4
        );
        this.textInput = "";

        this.pengeAmountInput = createInput("0").attribute("type", "number");
        this.pengeAmountInput.size(75);
        this.pengeAmountInput.position(
            this.x + (this.r * 2 - this.pengeAmountInput.width) / 2,
            this.y + (this.r - this.pengeAmountInput.height) / 1.2
        );

        this.editimage = editimagepreload;

        this.moneyObjects = [];
    }
    draw() {
        rect(this.x, this.y, this.r * 2, this.r * 8, 25);
        //første kasse
        rect(this.x, this.y, this.r * 2, this.r, 25);

        if (this.editable) {
            image(
                this.editimage,
                this.x + this.r * 2 - 35,
                this.y + 10,
                25,
                25
            );
            if (
                mouseX < this.x + this.r * 2 - 35 + 25 &&
                mouseX > this.x + this.r * 2 - 35 &&
                mouseY < this.y + 25 &&
                mouseY > this.y + 10 &&
                mouseIsPressed
            ) {
                this.editable = false;
                this.pengeInput.show();
                this.textInput = "";
            }
        }

        this.textw = text(
            this.textInput,
            this.x + this.r / 2,
            this.y + this.r / 2
        );
        this.textw.textSize(20);
        this.pengeInput.changed(() => {
            this.textInput = this.pengeInput.value();
            this.pengeInput.hide();
            this.editable = true;
        });

        this.pengeAmountInput.input(() => {
            this.tempMoneyValue = this.pengeAmountInput.value();
            this.moneyObjects = [];
        });

        if (this.tempMoneyValue >= 1000) {
            this.tempMoneyValue -= 1000;
            this.moneyObjects.push(
                new money(
                    this.x + (this.r * 2 - kr1000.width) / 2,
                    this.y + this.r,
                    kr1000
                )
            );
        } else if (this.tempMoneyValue >= 500) {
            this.tempMoneyValue -= 500;
            this.moneyObjects.push(
                new money(
                    this.x + (this.r * 2 - kr500.width) / 2,
                    this.y + this.r,
                    kr500
                )
            );
        } else if (this.tempMoneyValue >= 200) {
            this.tempMoneyValue -= 200;
            this.moneyObjects.push(
                new money(
                    this.x + (this.r * 2 - kr200.width) / 2,
                    this.y + this.r,
                    kr200
                )
            );
        } else if (this.tempMoneyValue >= 100) {
            this.tempMoneyValue -= 100;
            this.moneyObjects.push(
                new money(
                    this.x + (this.r * 2 - kr100.width) / 2,
                    this.y + this.r,
                    kr100
                )
            );
        } else if (this.tempMoneyValue >= 50) {
            this.tempMoneyValue -= 50;
            this.moneyObjects.push(
                new money(
                    this.x + (this.r * 2 - kr50.width) / 2,
                    this.y + this.r,
                    kr50
                )
            );
        }
        for (let i = 0; i < this.moneyObjects.length; i++) {
            this.moneyObjects[i].y = this.y + i * 25 + this.r;
            this.moneyObjects[i].draw();
        }
    }
    editable() {
        this.editable = true;
    }
}

class AdderBox {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.beingPressed = false;
    }
    draw() {
        square(this.x, this.y, this.r, this.r / 4);
        push();
        strokeWeight(this.r / 16);
        line(
            this.x + this.r / 2,
            this.y + this.r / 6,
            this.x + this.r / 2,
            this.y + this.r - this.r / 6
        );
        line(
            this.x + this.r / 6,
            this.y + this.r / 2,
            this.x + this.r - this.r / 6,
            this.y + this.r / 2
        );
        pop();
        if (this.x + this.r > width) {
            resizeCanvas(width + 200, height);
        }
    }
    clickOn(array) {
        if (
            mouseX > this.x &&
            mouseX < this.x + this.r &&
            mouseY > this.y &&
            mouseY < this.y + this.r &&
            mouseIsPressed &&
            !this.beingPressed
        ) {
            this.mousePosColor = get(mouseX, mouseY);
            this.boolPosColor = [];

            for (i = 0; i < this.mousePosColor.length - 1; i++) {
                if (
                    this.mousePosColor[i] == 255 ||
                    this.mousePosColor[i] == 0
                ) {
                    this.boolPosColor[i] = true;
                } else {
                    this.boolPosColor[i] = false;
                }
            }

            function boolSum(arr) {
                return arr.every(Boolean);
            }

            if (boolSum(this.boolPosColor)) {
                this.x += 200;
                this.newKasse = new Kasse(this.x - 200, this.y, 100);
                array.push(this.newKasse);
            }
        }
        this.beingPressed = mouseIsPressed;
    }
}
