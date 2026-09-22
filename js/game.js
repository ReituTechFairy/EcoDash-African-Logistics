let canvas = document.getElementById("gameCanvas");

canvas.width = 1000;
canvas.height = 600;

let ctx = canvas.getContext("2d");

// Stores which keys are currently being pressed
const keys = {};

// Creates the player
const player = new Player(100, 280);

// Checks when a key is pressed
document.addEventListener("keydown", function(event) {

    keys[event.key.toLowerCase()] = true;

});

// Checks when a key is released
document.addEventListener("keyup", function(event) {

    keys[event.key.toLowerCase()] = false;

});

// Updates the game
function updateGame() {

    player.update(keys, canvas.width, canvas.height);

    // Update the battery displayed on the HUD
    document.getElementById("battery").textContent =
        Math.floor(player.battery);

}

// Draws everything on the Canvas
function drawGame() {

    // Clear the previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player
    player.draw(ctx);

}

// Game loop
function gameLoop() {

    updateGame();
    drawGame();

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();