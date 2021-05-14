var guessInput = document.querySelector('.guess-input')
var submitButton = document.querySelector('.submit')
var recentGuess = document.querySelector('.recent-guess')
var lowerRange = document.querySelector('.lower-range')
var upperRange = document.querySelector('.upper-range')
var instructions = document.querySelector('.instructions')
var randomNumber = Math.ceil(Math.random() * 100)
var guessResponse = document.querySelector('.response')

console.log('random number', randomNumber)

guessInput.addEventListener('keyup', enableButtons)
submitButton.addEventListener('click', submitGuess)

function enableButtons(e) {
  if (isNaN(guessInput.value)) {
    alert('Please input a number.')
    guessInput.value = ''
    return
  }
  submitButton.disabled = false
}

function submitGuess(e) {
  e.preventDefault()
  checkInputRange()
  checkUserGuess()
}

function checkInputRange() {
  guessResponse.classList.remove('visible')
  guessResponse.innerText = ''
  if (guessInput.value >= 1 && guessInput.value <= 100) {
    return
  }
  alert('Your guess is out of the defined range!  Please try again.')
  guessInput.value = ''
  submitButton.disabled = true
}

function checkUserGuess() {
  recentGuess.innerText = guessInput.value
  if (guessInput.value < randomNumber) {
    guessIsTooLow()
  } else if (guessInput.value > randomNumber) {
    guessIsTooHigh()
  } else if (guessInput.value == randomNumber) {
    guessIsCorrect()
  }
}

function guessIsTooLow() {
  guessResponse.classList.add('visible')
  guessResponse.innerText = "Your guess is too low."
  lowerRange.innerText = guessInput.value
  guessInput.value = ''
}

function guessIsTooHigh() {
  guessResponse.classList.add('visible')
  guessResponse.innerText = "Your guess is too high."
  upperRange.innerText = guessInput.value
  guessInput.value = ''
}

function guessIsCorrect() {
  guessResponse.classList.add('visible')
  guessResponse.innerText = "That's correct!  Great job!"
  instructions.innerText = "Wow!  Amazing!"
  guessInput.value = ''
  submitButton.disabled = true
}
