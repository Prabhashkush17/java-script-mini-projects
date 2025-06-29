function rollDice() {
    const diceFace = ['1', '2', '3', '4', '5', '6'];
    let random = Math.floor(Math.random() * diceFace.length);
    document.getElementById("result").textContent = diceFace[random];
}
