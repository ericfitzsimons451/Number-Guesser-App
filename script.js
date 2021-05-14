var guessInput = document.querySelector('.guess-input')
var submitButton = document.querySelector('.submit')
var resetButton = document.querySelector('.reset')
var recentGuess = document.querySelector('.recent-guess')
var lowerRange = document.querySelector('.lower-range')
var upperRange = document.querySelector('.upper-range')
var instructions = document.querySelector('.instructions')
var recentGuessLabel = document.querySelector('.recent-guess-label')
var randomNumber = Math.ceil(Math.random() * 100)
var guessResponse = document.querySelector('.response')

console.log('random number', randomNumber)

guessInput.addEventListener('keyup', enableButtons)
submitButton.addEventListener('click', submitGuess)
resetButton.addEventListener('click', resetGame)

function enableButtons(e) {
  resetButton.disabled = false
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
  recentGuessLabel.classList.add('visible')
  recentGuess.classList.add('visible')
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

function resetGame() {
  lowerRange = 1
  upperRange = 100
  recentGuess = '--'
  response = ''
  randomNumber = Math.ceil(Math.random() * 100)
  submitButton.disabled = true
  recentGuess = ''
  recentGuessLabel.classList.add('hidden')
}
