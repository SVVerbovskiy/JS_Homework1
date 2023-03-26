let answer = Math.floor(Math.random() * 1000) + 1; // generate a random number from 1 to 1000
console.log("Компьютер загадал число: ", answer)
let attempts = 0; // initialize the number of attempts to 0

while (true) {
  let guess = prompt("Загадайте число от 1 до 1000:"); // prompt the user to guess a number
  console.log("Вы загадали число:", guess)
  if (guess === null) {
    // if the user clicked cancel or closed the prompt window
    break; // end the game
  }
  guess = parseInt(guess); // convert the user's guess to a number

  if (isNaN(guess)) { // if the user did not enter a number
    alert("Пожалуйста введите корректное число");
  } else if (guess < 1 || guess > 1000) { // if the user entered a number outside the range
    alert("Пожалуйста введите число от 1 до 1000");
  } else { // if the user entered a valid number
    attempts++; // increase the number of attempts

    if (guess === answer) { // if the user guessed the correct number
      alert(`Поздравляем, Вы угадали число за  ${attempts} попыток`);
      break; // end the game
    } else if (guess < answer) { // if the user guessed a number lower than the answer
      alert("Слишком маленькое. Попробуйте еще раз");
    } else { // if the user guessed a number higher than the answer
      alert("Слишком большое. ПОпробуйте еще раз.");
    }
  }
}
