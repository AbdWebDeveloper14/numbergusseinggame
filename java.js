let secretNumber;
const maxNumber = 100;

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
}

function handleGuess(event) {
    event.preventDefault();
    const guess = parseInt(document.getElementById('guess').value, 10);
    const messageElement = document.getElementById('message');
    
    if (guess < 1 || guess > maxNumber) {
        messageElement.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (guess < secretNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else if (guess > secretNumber) {
        messageElement.textContent = 'Too high! Try again.';
    } else {
        messageElement.textContent = 'Congratulations! You guessed it right!';
        document.getElementById('resetButton').style.display = 'inline';
        document.getElementById('guessForm').style.display = 'inline';
    }
}

function resetGame() {
    generateSecretNumber();
    document.getElementById('guessForm').style.display = 'block';
    document.getElementById('message').textContent = '';
    document.getElementById('resetButton').style.display = 'none';
}

document.getElementById('guessForm').addEventListener('submit', handleGuess);
document.getElementById('resetButton').addEventListener('click', resetGame);

// Initialize the game
generateSecretNumber();
