

class Ball {
    constructor(x, y, paddle1) {
        this.canvas = document.getElementById("canvas")
        this.context = canvas.getContext("2d")
        this.ballX = x
        this.ballY = y
        this.ballDir = [1, 1]
        this.ballRadius = 7
        this.paddle1 = paddle1
        //this.brick = new Brick()
    }
    drawBall() {
        this.context.beginPath();
        this.context.arc(this.ballX, this.ballY, 7, 0, 2 * Math.PI, false)
        this.context.fillStyle = 'red';
        this.context.fill();
    }

    moveBall() {
        this.ballX += this.ballDir[0]
        this.ballY += this.ballDir[1]
        //ball hits right wall or left wall - change direction
        if (this.ballX + this.ballRadius >= this.canvas.width || this.ballX - this.ballRadius <= 10) {
            this.ballDir[0] = - this.ballDir[0]
        }

        //ball hits ceiling - change direction
        else if (this.ballY - this.ballRadius <= 10) {
            this.ballDir[1] = - this.ballDir[1]
        }
        //ball hits paddle1 -change direction
        else if (this.ballY + this.ballRadius >= this.paddle1.paddleY - 10 && this.ballX - this.ballRadius >= this.paddle1.paddleX && this.ballX + this.ballRadius <= this.paddle1.paddleX + 100) {
            // console.log(this.ballY + this.ballRadius >= this.paddle1.paddleY + 10)
            this.ballDir[1] = - this.ballDir[1]
        }
        //ball hits any brick, ie, an index in the array, take that element out of array - change direction
        //else if

    }


}
