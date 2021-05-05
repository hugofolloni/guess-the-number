let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
        guesses.style.cssText = 'text-align: center; font-size: 18px; margin-bottom: 1vh;'
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.color = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.cssText = 'color: red; text-align: center; font-size: 20px; font-weight: 700; margin-bottom: 1vh;';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
            lowOrHi.style.cssText = 'text-align: center; font-size: 18px;'
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('INPUT');
    resetButton.setAttribute("type", "button");
    resetButton.setAttribute("value", "Começar novo jogo!")
    resetButton.textContent = 'Start new game!';
    resetButton.style.cssText = 'cursor:pointer;width:20%;height: 6vh;border: none;border-radius: 32px;background: #413ca1;color: #EAEAEA;font-size: 1.1rem;margin-bottom: 5vh;margin-left: 6.5vw;'
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}


function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 10 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus ();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
    