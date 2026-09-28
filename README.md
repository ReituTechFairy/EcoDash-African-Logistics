# EcoDash-African-Logistics

# Project Description:
EcoDash is an African-inspired digital logistics simulation demonstrating the challenges faced when delivering essential supplies in a South African environment. The simulation was developed using HTML5 Canvas, CSS3 and Vanilla JavaScript (ES6+). The project demonstrates JavaScript animation, object-oriented programming, mathematical calculations, physics, collision detection, user interaction and local storage. The player/user controls an electric delivery vehicle while managing battery energy, travelling through different environmental conditions and avoiding infrastructure obstacles.

# Technologies Used
-HTML5
-JavaScript (ES6+)
-HTML5 Canvas
-Browser Local Storage 
-Web Audio API

# How to Run the Project
1. Download or Clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open "index.html" in a web browser.
4. Press "ENTER" or "Start Mission" to begin.
5. Follow the instructions listed at the top of the game to control the vehicle

# Controls instructions
Key -> Action
W -> Move forward 
A -> Turn Left
S -> Move Backward
D -> Turn Right
P -> Pause/Resume
R -> Restarts after Game Over
ENTER -> Start Mission

# Main Features

# Vehicle Movement and Physics

- Smooth acceleration and movement
- Directional movement using `Math.sin()` and `Math.cos()`
- Velocity and acceleration
- Friction to gradually slow the vehicle
- Vehicle rotation and directional movement
- Battery consumption while moving

# Environmental Obstacles

- Potholes
- Rivers
- Fallen trees
- Construction zones
- Solar Microgrid charging zone

Each obstacle has a different effect on the vehicle, such as slowing movement, stopping the vehicle or reducing battery energy.

# Collision Detection

The project uses Axis-Aligned Bounding Box (AABB) collision detection to determine when the vehicle interacts with obstacles.

Different collision responses are applied depending on the obstacle type.

# Battery and Energy Management

The vehicle starts with a full battery.

Battery energy decreases while the vehicle is moving and when certain obstacles are encountered.

The Solar Microgrid Zone allows the player to recharge the vehicle's battery.

# Score and Distance

The simulation tracks:

- Score
- Distance travelled
- Energy efficiency
- High score

The high score is stored using browser Local Storage so that it can remain available between sessions.

# Game States

- Start screen
- Playing state
- Pause state
- Game Over state
- Restart functionality

# Sound

A collision sound effect is generated using the Web Audio API when the vehicle hits an obstacle.

# Original Feature

The original feature developed for EcoDash is a dynamic day/night and weather system.

The environment changes between daytime and nighttime during the simulation. Rain also occurs during certain cycles and reduces visibility using a transparent environmental overlay.

The rain includes animated raindrops that move across the Canvas, creating a changing weather condition during gameplay.

# Project Structure

EcoDash-African-Logistics/
│
├── index.html (contains structure of interface and Canvas)
├── style.css (contains visual styling and responsive layout)
├── README.md (contains project information, setup instructions and documentation)
│
└── js/
    ├── player.js (contains player class and vehicle movement, physics and battery behaviour)
    ├── obstacle.js (contains Obstacle class and obstacle drawing)
    └── game.js (controls the game state, animation loop, collisions, scoring, weather, day/night system and Local Storage.)

# AI Usage Disclosure

Area -> How AI was used

Concept Explanation -> AI was used to explain JavaScript, Canvas, physics and collision detection concepts in beginner-friendly terms.
Debugging -> AI was used to help identify and troubleshoot coding errors during development.

# References
**# References**

GitHub, 2026. About README files. GitHub Docs. Available at: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes [Accessed: 24 September 2026].

GeeksforGeeks, n.d. How to Save Data in Local Storage in JavaScript. Available at: https://www.geeksforgeeks.org/javascript/how-to-save-data-in-local-storage-in-javascript/ [Accessed: 23 September 2026].

Mozilla Developer Network, n.d.a. Classes. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes [Accessed: 19 September 2026].

Mozilla Developer Network, n.d.b. Math.sin(). MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin [Accessed: 20 September 2026].

Mozilla Developer Network, n.d.c. Collision detection. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection [Accessed: 22 September 2026].

Mozilla Developer Network, n.d.d. Window: localStorage property. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage [Accessed: 23 September 2026].

Mozilla Developer Network, n.d.e. Web Audio API. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API [Accessed: 18 September 2026].

Mozilla Developer Network, n.d.f. Window: requestAnimationFrame() method. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame [Accessed: 21 September 2026].

Mozilla Developer Network, n.d.g. Canvas API. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API [Accessed: 20 September 2026].

Mozilla Developer Network, n.d.h. CSS: Cascading Style Sheets. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed: 17 September 2026].

Mozilla Developer Network, n.d.i. CSS media queries. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries [Accessed: 25 September 2026].

W3Schools, n.d. HTML Canvas. Available at: https://www.w3schools.com/html/html5_canvas.asp [Accessed: 16 September 2026].
