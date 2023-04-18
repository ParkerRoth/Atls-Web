const phoneNumberInput = document.getElementById('phone-number');
const randomizeButtons = document.querySelectorAll('.randomize-buttons button');
const restartButton = document.getElementById('restart');

// Generate a random digit between 0 and 9
function randomDigit() {
  return Math.floor(Math.random() * 10);
}

// Update the phone number input with the specified digit at the specified position
function updatePhoneNumber(digit, position) {
  const phoneNumberArray = phoneNumberInput.value.split('');
  phoneNumberArray[position] = digit;
  phoneNumberInput.value = phoneNumberArray.join('');
}

// Add event listeners to the randomize buttons to randomize the corresponding digit
randomizeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const randomDigitValue = randomDigit();
    updatePhoneNumber(randomDigitValue, index);
  });
});

// Add event listener to the restart button to clear the phone number input
restartButton.addEventListener('click', () => {
  phoneNumberInput.value = '';
});
