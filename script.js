const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const cleanInputString = (str) => {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, '').toLowerCase();
};

const checkPalindrome = (str) => {
  const cleanedStr = cleanInputString(str);
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};

checkButton.addEventListener('click', () => {
  const inputValue = textInput.value.trim();
  if (inputValue === '') {
    alert('Please input a value');
  } else {
    const isPalindrome = checkPalindrome(inputValue);
    if (isPalindrome) {
      result.style.display = 'block';
      result.innerHTML = `<span>${inputValue}</span> is a palindrome`;
    } else {
      result.style.display = 'block';
      result.innerHTML = `<span>${inputValue}</span> is not a palindrome`;
    }
  }
});
