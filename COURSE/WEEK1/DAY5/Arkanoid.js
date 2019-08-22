


class Game {
    constructor() {

        this.canvas = document.getElementById("canvas")
        this.context = canvas.getContext("2d")
        this.paddle1 = new Paddle(250, 370, "ArrowLeft", "ArrowRight")
        this.ball = new Ball(canvas.width / 2, canvas.height / 2, this.paddle1, this.paddle2)
        this.bricks = []

        this.initBrickWall()

    }

    draw() {
        this.drawRect()
        this.showBricks()
        this.paddle1.paddle1()
        this.ball.drawBall()

    }

    move() {
        this.ball.moveBall()
        this.hitBrick()
    }

    gameStatus() {
        this.isGameOver()

    }

    drawRect() {
        this.context.fillStyle = "black"
        this.context.fillRect(10, 10, this.canvas.width, this.canvas.height)

    }





    initBrickWall() {
        for (let i = 0; i < 12; i++) { //for loop for width of brickWall (width of 6 bricks, length of the array)
            for (let j = 0; j < 8; j++) { //for loop for height of BrickWall (height of 4xbrickheigh = 40)
                this.bricks.push(new Brick(i * 50 + 10, j * 10 + 10, 40, 7)) //the x, y positions will be equivalent to the height because we are placing them next to each other
            }

        }
        console.log(this.bricks)

    }

    showBricks() {
        for (let i = 0; i < this.bricks.length; i++) {
            this.bricks[i].drawBrick()
        }
    }

    hitBrick() {
        //let count = 0 //SCORE
        for (let i = 0; i < this.bricks.length; i++) {

            if (this.ball.ballY - this.ball.ballRadius <= this.bricks[i].y + this.bricks[i].height && this.ball.ballX - this.ball.ballRadius >= this.bricks[i].x && this.ball.ballX + this.ball.ballRadius <= this.bricks[i].x + this.bricks[i].width) {
                console.log('here', i)
                //count += 1 //SCORE
                this.bricks.splice(i, 1)
                this.ball.ballDir[1] = - this.ball.ballDir[1]

                //console.log(count)
            }

        }


    }




    isGameOver() {
        if (this.bricks.length === 0) {

            //clearInterval()

            //let stopGame = this.setInterval()
            clearInterval(this.stopGame)

            console.log("YOU WIN")
        }

        else if (this.ball.ballY + this.ball.ballRadius >= this.canvas.height) {

            //clearInterval()
            //let stopGame = this.startGame()
            clearInterval(this.stopGame)

            console.log("GAME OVER")
        }


    }
    startGame() {
        this.stopGame = setInterval(() => {
            this.gameStatus()
            this.draw()
            this.move()

        }, 5)


    }


}




const arkanoid = new Game()
arkanoid.startGame()
