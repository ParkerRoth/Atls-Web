const phoneNumberInput = document.getElementById('phone-number');
const randomizeButtons = document.querySelectorAll('.randomize-buttons button');
const restartButton = document.getElementById('restart');

// Generate a random digit between 0 and 9
function randomDigit() {
  return Math.floor(Math.random() * 10);
}


function updatePhoneNumber(digit, position) {
  const phoneNumberArray = phoneNumberInput.value.split('');
  phoneNumberArray[position] = digit;
  phoneNumberInput.value = phoneNumberArray.join('');
}


randomizeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const randomDigitValue = randomDigit();
    updatePhoneNumber(randomDigitValue, index);
  });
});



restartButton.addEventListener('click', () => {
  phoneNumberInput.value = '';
});
