const numberToGuess = Math.floor(Math.random()*1000)
console.log("Я загадал: ", numberToGuess)
guesses = document.querySelector

const numberFromUser = prompt("Введите число от 1 до 1000: ")
console.log("Вы ввели: ", numberFromUser)

if (isNaN(numberFromUser) || (+numberFromUser < 0 && +numberFromUser > 1000)) {
    alert("Вы ввели не число от 0 до 1000!")
} else if (+numberFromUser === numberToGuess) {
    alert("Вы угадали!")
} else {
    alert("Вы не угадали!")
}