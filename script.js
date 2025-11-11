
const counterMax = 5;
const minNum = 1;
const maxNum = 100;
let guess;
let guessCount = 0;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);


const attemptNumber = document.getElementById("attempt-number");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const winningMessage = document.getElementById("winning-message");
const guessNumber = document.getElementById("guess-number");



submit.onclick = function () {
    guess = Number(guessNumber.value);
    if(isNaN(guess) || guess === 0) {
        message.textContent = "Please enter a valid number";
        message.style.color = "red";
        guessNumber.value = ''; // Clear input
        guessNumber.focus();    // Keep focus
        return;
    }else if(guess < minNum || guess > maxNum) {
        message.textContent = `Please enter a number between ${minNum} and ${maxNum}`;
        message.style.color = "red";
        guessNumber.value = ''; // Clear input
        guessNumber.focus();    // Keep focus
        return;
    }
    guessCount++;
    attemptNumber.textContent = guessCount;

    if(guess === answer) {
        message.textContent = "🎉 CORRECT! 🎉";
        message.style.color = "green";
        winningMessage.textContent = "You have WON $1000!!! 💰";
        winningMessage.style.color = "green";

        celebrate();

        submit.disabled = true;
        guessNumber.disabled = true;
    }
    else if(guessCount >= counterMax) {
        message.textContent =  `Game Over!!! The correct answer was ${answer}`;
        message.style.color = "red";
        winningMessage.textContent = "You have LOST!!! Try again another day!!! ☹️";
        winningMessage.style.color = "red";

        submit.disabled = true;
        guessNumber.disabled = true;
    }
    else if(guess > answer) {
        message.textContent = `Your guessed number is HIGH! Keep Trying. ${counterMax - guessCount} attempts left.`;
        message.style.color = "orange";
    }
    else if(guess < answer) {
        message.textContent = `Your guessed number is LOW! Keep Trying. ${counterMax - guessCount} attempts left.`;
        message.style.color = "orange";
    }
    guessNumber.value = '';
    guessNumber.focus();
}

// CELEBRATION FUNCTION
function celebrate() {
    const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '⭐', '🎈', '💰', '🏆'];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    // Make winning message bounce
    winningMessage.classList.add('bounce');

    // Create 250 confetti pieces
    for(let i = 0; i < 250; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Random emoji or colored circle
            if(Math.random() > 0.5) {
                confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            } else {
                confetti.textContent = '●';
                confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            }

            // Random position
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';

            // Random horizontal movement
            const xMovement = (Math.random() - 0.5) * 200;
            confetti.style.setProperty('--x-movement', xMovement + 'px');

            // Random delay
            confetti.style.animationDelay = Math.random() * 0.5 + 's';

            document.body.appendChild(confetti);

            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, 3500);
        }, i * 30);
    }
}