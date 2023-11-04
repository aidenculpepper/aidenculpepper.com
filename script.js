document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const gameResult = document.getElementById('gameResult');

    startButton.addEventListener('click', startGame);

    function startGame() {
        const randomNumber = Math.floor(Math.random() * 2); // 0 or 1

        if (randomNumber === 0) {
            gameResult.textContent = 'You win!';
            gameResult.style.color = 'green';
        } else {
            gameResult.textContent = 'You lose!';
            gameResult.style.color = 'red';
        }

        startButton.disabled = true;
    }
});