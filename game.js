// Set up the game variables
let bird = document.getElementById("bird");
let birdY = window.innerHeight / 2; // Starting vertical position of the bird
let birdSpeed = 0;
let gravity = 0.5; // Gravity force
let jumpStrength = -10; // How strong the bird jumps when tapped
let score = 0;
let pipes = [];
let pipeGap = 200; // Vertical gap between pipes

// Create a ground element to stop the bird from falling
let ground = document.querySelector(".ground");

// Update the bird's position
function updateBirdPosition() {
  birdSpeed += gravity; // Apply gravity to the bird's speed
  birdY += birdSpeed; // Update bird's Y position

  // Prevent the bird from going below the ground
  if (birdY > window.innerHeight - 20) {
    birdY = window.innerHeight - 20;
    birdSpeed = 0;
  }

  // Prevent the bird from going above the top of the screen
  if (birdY < 0) {
    birdY = 0;
    birdSpeed = 0;
  }

  // Update the bird's CSS to move it
  bird.style.top = birdY + "px";
}

// Handle screen tap to make the bird flap
window.addEventListener("click", function() {
  birdSpeed = jumpStrength; // Apply an upward force when the screen is tapped
});

// Pipe generation
function createPipe() {
  let pipeHeight = Math.floor(Math.random() * (window.innerHeight - pipeGap));
  
  let pipeTop = document.createElement("div");
  pipeTop.classList.add("pipe-top");
  pipeTop.style.height = pipeHeight + "px";
  pipeTop.style.left = window.innerWidth + "px";
  document.getElementById("gameCanvas").appendChild(pipeTop);

  let pipeBottom = document.createElement("div");
  pipeBottom.classList.add("pipe");
  pipeBottom.style.height = window.innerHeight - pipeHeight - pipeGap + "px";
  pipeBottom.style.left = window.innerWidth + "px";
  document.getElementById("gameCanvas").appendChild(pipeBottom);

  pipes.push({ top: pipeTop, bottom: pipeBottom });
}

// Move pipes
function movePipes() {
  for (let i = 0; i < pipes.length; i++) {
    let pipeTop = pipes[i].top;
    let pipeBottom = pipes[i].bottom;
    
    let pipeLeft = parseFloat(pipeTop.style.left.replace("px", ""));
    
    if (pipeLeft <= -50) {
      pipeTop.remove();
      pipeBottom.remove();
      pipes.splice(i, 1);
      score++;
      document.getElementById("score").textContent = "Score: " + score;
      i--;
    } else {
      pipeTop.style.left = pipeLeft - 2 + "px";
      pipeBottom.style.left = pipeLeft - 2 + "px";
    }
  }
}

// Game loop: Update the bird's position and move pipes
function gameLoop() {
  updateBirdPosition();
  movePipes();

  // Check if bird hits pipes
  for (let i = 0; i < pipes.length; i++) {
    let pipeTop = pipes[i].top;
    let pipeBottom = pipes[i].bottom;
    
    if (
      parseFloat(bird.style.left.replace("px", "")) + 20 > parseFloat(pipeTop.style.left.replace("px", "")) &&
      parseFloat(bird.style.left.replace("px", "")) < parseFloat(pipeTop.style.left.replace("px", "")) + 50 &&
      (birdY < parseFloat(pipeTop.style.height.replace("px", "")) || birdY > window.innerHeight - parseFloat(pipeBottom.style.height.replace("px", "")))
    ) {
      gameOver();
    }
  }

  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Generate new pipes at intervals
setInterval(createPipe, 3000);

// Handle game over
function gameOver() {
  alert("Game Over! Final Score: " + score);
  score = 0;
  document.getElementById("score").textContent = "Score: 0";
  pipes.forEach(pipe => {
    pipe.top.remove();
    pipe.bottom.remove();
  });
  pipes = [];
  birdY = window.innerHeight / 2;
  birdSpeed = 0;
}
