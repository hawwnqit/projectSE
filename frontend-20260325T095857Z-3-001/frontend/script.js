const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{x: 200, y: 200}];
let direction = "RIGHT";
let food = {x: 100, y: 100};
let score = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.forEach(part => {
        ctx.fillStyle = "green";
        ctx.fillRect(part.x, part.y, 10, 10);
    });

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 10, 10);
}
function update() {
    let head = {...snake[0]};

    if(direction === "RIGHT") head.x += 10;
    if(direction === "LEFT") head.x -= 10;
    if(direction === "UP") head.y -= 10;
    if(direction === "DOWN") head.y += 10;

    snake.unshift(head);

    if(head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("score").innerText = score;
        food = {
            x: Math.floor(Math.random() * 40) * 10,
            y: Math.floor(Math.random() * 40) * 10
        };
    } else {
        snake.pop();
    }
    if(head.x < 0 || head.y < 0 || head.x >= 400 || head.y >= 400) {
        if (confirm(`Game Over! Score: ${score}\\nPlay again?`)) {
            document.location.reload();
        }
        return;
    }
}

document.addEventListener("keydown", e => {
    if(e.key === "ArrowUp") direction = "UP";
    if(e.key === "ArrowDown") direction = "DOWN";
    if(e.key === "ArrowLeft") direction = "LEFT";
    if(e.key === "ArrowRight") direction = "RIGHT";
});
setInterval(() => {
    update();
    draw();
}, 100);
