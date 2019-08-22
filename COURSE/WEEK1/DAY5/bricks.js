class Brick {
    constructor(x, y, width, height, color) {
        this.canvas = document.getElementById("canvas")
        this.context = canvas.getContext("2d")
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color

    }



    drawBrick() {
        this.context.fillStyle = "green" //TO DO: randomize color
        this.context.fillRect(this.x, this.y, this.width, this.height)
    }


}


//this.x, this.y, this.width, this.height