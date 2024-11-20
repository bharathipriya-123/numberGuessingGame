let randomNumber = Math.floor(Math.random() * 100) + 1;
    let chancesLeft = 5;
    let guessedNumbers = [];

    const guessInput = document.getElementById('guess');
    const button = document.getElementById('button');
    const result = document.getElementById('result');
    const chances = document.getElementById('chances');
    const resetButton = document.getElementById('reset');
    const guessedNumbersDisplay = document.getElementById('guessed-numbers');

    const resetGame = () => {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      chancesLeft = 5;
      guessedNumbers = [];
      chances.textContent = chancesLeft;
      result.textContent = "RESULT";
      guessInput.value = '';
      guessedNumbersDisplay.textContent = '';
    };

    button.addEventListener('click', function () {
      const userGuess = Number(guessInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.textContent = "Please enter a number between 1 and 100.";
        // return;
      }

      if (guessedNumbers.includes(userGuess)) {
        result.textContent = "You already guessed this number! Try a different one.";
        // return;
      }

      guessedNumbers.push(userGuess);
      guessedNumbersDisplay.textContent = guessedNumbers.join(',');

      chancesLeft--;
      chances.textContent = chancesLeft;

      if (userGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the correct number!";
        setTimeout(resetGame, 5000); 
        // return;
      } else if (userGuess < randomNumber) {
        result.textContent = "The number is too low. Try again!";
      } else {
        result.textContent = "The number is too high. Try again!";
      }

      if (chancesLeft === 0) {
        result.textContent ="game over! the correct answer is"+randomNumber ;
        setTimeout(resetGame, 5000); 
      }
    });

    resetButton.addEventListener('click', resetGame);







     
    
    











