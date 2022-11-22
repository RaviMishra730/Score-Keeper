const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");
const reset = document.querySelector("#reset");
let play_1_score = 0;
let play_2_score = 0;
let winningScore = 3;
let isGameOver = false;
p1Button.addEventListener("click", function () {
  if (play_1_score != winningScore) {
    if (!isGameOver) {
      play_1_score += 1;
    }

    if (play_1_score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-link");
      p2Display.classList.add("has-text-primary");
      p1Button.disabled = true
      p2Button.disabled = true
    }

    p1Display.textContent = play_1_score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    play_2_score = play_2_score + 1;
  }
  if (play_2_score === winningScore) {
    isGameOver = true;
    p2Display.classList.add("has-text-primary");
    p1Display.classList.add("has-text-link");
    p2Button.disabled = true
    p1Button.disabled = true
  }
  p2Display.textContent = play_2_score;
});
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset1();
});
reset.addEventListener("click", reset1);
function reset1() {
  isGameOver = false;
  play_1_score = 0;
  play_2_score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
    p1Display.classList.remove("has-text-link", "has-text-primary");
    p2Display.classList.remove("has-text-link", "has-text-primary");
    p1Button.disabled = false
    p2Button.disabled = false
}
