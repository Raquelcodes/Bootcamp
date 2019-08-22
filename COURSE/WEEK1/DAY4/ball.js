

class Ball {
    constructor(x, y, paddle1, paddle2) {
        this.canvas = document.getElementById("canvas")
        this.context = canvas.getContext("2d")
        this.ballX = x
        this.ballY = y
        this.ballDir = [1, 1]
        this.ballRadius = 10
        this.paddle1 = paddle1
        this.paddle2 = paddle2
    }
    drawBall() {
        this.context.beginPath();
        this.context.arc(this.ballX, this.ballY, 10, 0, 2 * Math.PI, false)
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
<<<<<<< HEAD



        //For restarting when scoring 
        //if (this.ballX > this.canvas.width ) {
        //     [insert restarting function] 
        //}
        // For restarting when scoring 
        //if else (this.ballX < 10){
        //     [insert restarting function]
        // }
=======
>>>>>>> 1c85b6462f4d4a25ef3ff10c42f5314dc087c2b0
        //ball hits floor or ceiling - change direction
        else if (this.ballY + this.ballRadius >= this.canvas.height || this.ballY - this.ballRadius <= 10) {
            this.ballDir[1] = - this.ballDir[1]
        }
        //ball hits paddle1 (left paddle) -change direction
        else if (this.ballX - this.ballRadius <= this.paddle1.paddleX + 10 && this.ballY - this.ballRadius >= this.paddle1.paddleY && this.ballY - this.ballRadius <= this.paddle1.paddleY + 100) {
            //console.log()
            this.ballDir[0] = - this.ballDir[0]
        }
        //ball hits paddle2 (right paddle) -change direction
        else if (this.ballX + this.ballRadius >= this.paddle2.paddleX - 10 && this.ballY + this.ballRadius >= this.paddle2.paddleY && this.ballY + this.ballRadius <= this.paddle2.paddleY + 100) {
            //console.log()
            this.ballDir[0] = - this.ballDir[0]
        }

    }


}
