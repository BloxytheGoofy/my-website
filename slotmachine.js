const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "💎", "🪙"];
const reels = document.querySelectorAll('.reel');
const spinButton = document.getElementById('spin-btn');
const resultDiv = document.getElementById('result');

spinButton.addEventListener('click', () => {
    let results = [];
    reels.forEach(reel => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.textContent = randomSymbol;
        results.push(randomSymbol);
    });
    checkResult(results);
});

function checkResult(results) {
    const allEqual = results.every(symbol => symbol === results[0]);
    if (allEqual) {
        resultDiv.textContent = `Congratulations! You won with ${results[0]}!`;
    } else {
        resultDiv.textContent = 'You Lost, Try Again!';
    }
}
