
class Game {
    constructor() {

        this.canvas = document.getElementById("canvas") //i could also put this in the global scope so all classes could access it, instead of repeting it 
        this.context = canvas.getContext("2d") //i could also put this in the global scope so all classes could access it, instead of repeting it
        this.paddle1 = new Paddle(20, 250, "w", "s")
        this.paddle2 = new Paddle(475, 250, "ArrowUp", "ArrowDown")
        this.ball = new Ball(canvas.width / 2, canvas.height / 2, this.paddle1, this.paddle2)

    }


    createRect() {
        this.context.fillStyle = "black"
        this.context.fillRect(10, 10, this.canvas.width, this.canvas.height)

    }




    startGame() {
        this.createRect()
        this.paddle1.paddle1()
        this.paddle2.paddle2()
        this.ball.drawBall()
        this.ball.moveBall()

    }

    updateGame() {
        setInterval(this.startGame.bind(this), 5)
    }

}


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


const pong = new Game()
pong.updateGame()