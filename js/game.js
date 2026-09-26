let canvas = document.getElementById("gameCanvas");

canvas.width = 1000;
canvas.height = 600;

let ctx = canvas.getContext("2d");

// Stores the current state of the game
let gameState = "start";

// Stores the player's score
let score = 0;

// Stores the distance travelled
let distance = 0;

// Stores the battery level when the game starts
let startingBattery = 100;

// Load the saved high score
let highScore = Number(localStorage.getItem("ecoDashHighScore")) || 0;

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

    let key = event.key.toLowerCase();

    keys[key] = true;

    // Start the game by pressing Enter
    if (key === "enter" && gameState === "start") {

        gameState = "playing";

    }

    // Pause or resume the game using P
    if (key === "p" && gameState === "playing") {

        gameState = "paused";

    }
    else if (key === "p" && gameState === "paused") {

        gameState = "playing";

    }
    // Restart the game
if (key === "r" && gameState === "gameover") {

    player.x = 100;
    player.y = 280;

    player.vx = 0;
    player.vy = 0;

    player.battery = 100;

    player.collisionCooldown = 0;

    gameState = "playing";

}

});

// Checks when a key is released
document.addEventListener("keyup", function(event) {

    keys[event.key.toLowerCase()] = false;

});



// Updates the game
function updateGame() {

    player.update(keys, canvas.width, canvas.height);

    // Calculate how much the vehicle moved this frame
let movement = Math.abs(player.vx) + Math.abs(player.vy);

// Adds movement to the distance
distance += movement * 0.1;

// Increases the score as the vehicle travels
score += movement * 0.05;

// Calculate how much battery has been used
let batteryUsed = startingBattery - player.battery;

// Calculate distance travelled for each 1% of battery used
let efficiency = 0;

if (batteryUsed > 0) {
    efficiency = distance / batteryUsed;
}



// Check if the current score is higher than the high score
if (score > highScore) {

    highScore = score;

    // Save the new high score
    localStorage.setItem(
        "ecoDashHighScore",
        Math.floor(highScore)
    );
}

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

    // Updates the battery displayed on the HUD
    document.getElementById("battery").textContent =
        Math.floor(player.battery);

        // Updates the score displayed on the HUD
document.getElementById("score").textContent =
    Math.floor(score);

// Updates the distance displayed on the HUD
document.getElementById("distance").textContent =
    Math.floor(distance);

    // Update the efficiency displayed on the HUD
document.getElementById("efficiency").textContent =
    efficiency.toFixed(1);

    // Update the high score displayed on the HUD
document.getElementById("highScore").textContent =
    Math.floor(highScore);

        // Check if the battery has run out
        if (player.battery <= 0) {

        player.battery = 0;

        gameState = "gameover";
    }
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

    // Display the start screen
if (gameState === "start") {

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    ctx.font = "40px Arial";
    ctx.fillText(
        "ECODASH",
        canvas.width / 2,
        250
    );

    ctx.font = "20px Arial";
    ctx.fillText(
        "Press ENTER to start",
        canvas.width / 2,
        300
    );

}

// Display the pause screen
if (gameState === "paused") {

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    ctx.font = "40px Arial";
    ctx.fillText(
        "GAME PAUSED",
        canvas.width / 2,
        280
    );

    ctx.font = "20px Arial";
    ctx.fillText(
        "Press P to continue",
        canvas.width / 2,
        320
    );

}

// Display the game over screen
if (gameState === "gameover") {

    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    ctx.font = "40px Arial";
    ctx.fillText(
        "GAME OVER",
        canvas.width / 2,
        270
    );

    ctx.font = "20px Arial";
    ctx.fillText(
        "Battery depleted",
        canvas.width / 2,
        310
    );

    ctx.fillText(
        "Press R to restart",
        canvas.width / 2,
        350
    );

}

}

// Game loop
function gameLoop() {

    // Only updates the game while it is playing
    if (gameState === "playing") {
        updateGame();
    }

    drawGame();

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();