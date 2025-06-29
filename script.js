
function rollDice() {
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("die1").src = `dice-img${die1}.png`;
  document.getElementById("die2").src = `dice-img${die2}.png`;

  document.getElementById("result").textContent = `Sum: ${die1 + die2}`;
}
