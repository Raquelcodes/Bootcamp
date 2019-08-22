
class Paddle {
    constructor(x, y, left, right) {
        this.context = canvas.getContext("2d")
        this.paddleX = x
        this.paddleY = y
        this.left = left
        this.right = right



        document.addEventListener('keydown', event => {
            if (event.key === left) {
                //console.log('down')
                return this.paddleX -= 50
            } else if (event.key === right) {
                //console.log('up')
                return this.paddleX += 50
            }
        })
    }

    paddle1() {
        this.context.fillStyle = "white"
        this.context.fillRect(this.paddleX, this.paddleY, 100, 15)

    }


}