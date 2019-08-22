


class Game {
    constructor() {

        this.canvas = document.getElementById("canvas") //i could also put this in the global scope so all classes could access it, instead of repeting it 
        this.context = canvas.getContext("2d") //i could also put this in the global scope so all classes could access it, instead of repeting it
        this.paddle1 = new Paddle(20, 250, "w", "s")
        this.paddle2 = new Paddle(475, 250, "ArrowUp", "ArrowDown")
        this.ball = new Ball(canvas.width / 2, canvas.height / 2, this.paddle1, this.paddle2)
<<<<<<< HEAD
        //this.img = image
=======

>>>>>>> 1c85b6462f4d4a25ef3ff10c42f5314dc087c2b0
    }


    createRect() {
<<<<<<< HEAD
        // this.img=document.getElementById("image")
=======
>>>>>>> 1c85b6462f4d4a25ef3ff10c42f5314dc087c2b0
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




const pong = new Game()
pong.updateGame()