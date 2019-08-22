const canvas = document.getElementById("canvas")

const context = canvas.getContext("2d")

let ballX = canvas.width / 2
let ballY = canvas.height / 2
let ballDir = [1, 1]
let ballRadius = 10
function createRect() {
    context.fillStyle = "black"
    context.fillRect(10, 10, canvas.width, canvas.height)

}

function drawBall() {
    context.beginPath();
    context.arc(ballX, ballY, 10, 0, 2 * Math.PI, false)
    context.fillStyle = 'red';
    context.fill();
}

function moveBall() {
    ballX += ballDir[0]
    ballY += ballDir[1]
    if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 10) {
        ballDir[0] = - ballDir[0]
    }
    else if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 10) {
        ballDir[1] = - ballDir[1]
    }
}

function paddles() {
    context.fillStyle = "white"
    context.fillRect(20, 20, 15, 50)
}

function startGame() {

    createRect()
    paddles()
    drawBall()
    moveBall()
}


setInterval(startGame, 16)