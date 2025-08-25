"use strict";

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let numToGuess = randomNumber();
console.log(numToGuess);

function settingMessage(msg) {
  return (document.querySelector(".message").textContent = msg);
}

let score = 20;
document.querySelector(".score").textContent = score;

let highscore = 0;
document.querySelector(".highscore").textContent = highscore;

// LISTEN FOR CHECK BTN
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    settingMessage("No Number! ");
  } else if (guess === numToGuess) {
    //CORRECT GUESS. PLAYER WINS
    settingMessage("CORRECT! ");
    document.querySelector(".GN").textContent = "YOU WIN!";
    document.querySelector(".number").textContent = numToGuess;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== numToGuess) {
    score--;
    if (score > 0) {
      settingMessage(guess > numToGuess ? "Too High" : "Too Low");
      document.querySelector(".score").textContent = score;
    } else {
      settingMessage("Game Over");
      document.querySelector(".GN").textContent = "GAME OVER, YOU LOSE!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#470000";
      document.querySelector(".number").textContent = numToGuess;
    }
  }
});

// LISTEN TO AGAIN BTN
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  settingMessage("Start guessing...");
  document.querySelector(".GN").textContent = "GUESS MY NUMBER!";
  numToGuess = randomNumber();
  console.log(numToGuess);
});
