
class Paddle {
    constructor(x, y, up, down) {
        this.context = canvas.getContext("2d")
        this.paddleX = x
        this.paddleY = y
        this.up = up
        this.down = down



        document.addEventListener('keydown', event => {
            if (event.key === down) {
                //console.log('down')
                return this.paddleY += 50
            } else if (event.key === up) {
                //console.log('up')
                return this.paddleY -= 50
            }
        })
    }

    paddle1() {
        this.context.fillStyle = "white"
        this.context.fillRect(this.paddleX, this.paddleY, 15, 100)

    }


    paddle2() {
        this.context.fillStyle = "white"
        this.context.fillRect(this.paddleX, this.paddleY, 15, 100)
    }
}