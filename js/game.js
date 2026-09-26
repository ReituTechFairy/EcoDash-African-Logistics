let canvas = document.getElementById("gameCanvas");

canvas.width = 1000;
canvas.height = 600;

let ctx = canvas.getContext("2d");

// Stores which keys are currently being pressed
const keys = {};

// Creates the player
const player = new Player(100, 280);

// Creates obstacles in the game
const obstacles = [

    new Obstacle(300, 200, 50, 50, "pothole"),

    new Obstacle(500, 350, 120, 30, "tree"),

    new Obstacle(700, 150, 150, 80, "river"),

    new Obstacle(400, 100, 100, 50, "construction")

];

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

    // Check for collisions with obstacles
    for (let obstacle of obstacles) {

        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {

            // Only apply the effect when the cooldown is finished
            if (player.collisionCooldown === 0) {

                console.log("Hit a " + obstacle.type);

                // Pothole slows the vehicle
                if (obstacle.type === "pothole") {

                    player.vx *= 0.5;
                    player.vy *= 0.5;

                    // Small battery penalty
                    player.battery -= 1;
                }

                // Fallen tree stops the vehicle
                if (obstacle.type === "tree") {

                    player.vx = 0;
                    player.vy = 0;

                    // Battery penalty
                    player.battery -= 2;
                }

                // River greatly slows the vehicle
                if (obstacle.type === "river") {

                    player.vx *= 0.4;
                    player.vy *= 0.4;

                    // Battery penalty
                    player.battery -= 2;
                }

                // Construction area slows the vehicle
                if (obstacle.type === "construction") {

                    player.vx *= 0.6;
                    player.vy *= 0.6;

                    // Battery penalty
                    player.battery -= 1;
                }

                // Prevent battery from going below zero
                if (player.battery < 0) {
                    player.battery = 0;
                }

                // Start the collision cooldown
                player.collisionCooldown = 30;

            }

        }

    }

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

    // Draw the obstacles
    for (let obstacle of obstacles) {

        obstacle.draw(ctx);

    }

}

// Game loop
function gameLoop() {

    updateGame();
    drawGame();

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();