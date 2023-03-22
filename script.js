const a = 'John';
const b = 'John';

if (a === b) {
  const welcomeMsg = `Welcome, ${a}!`;
  const h1Elem = document.createElement('h1');
  h1Elem.textContent = welcomeMsg;
  h1Elem.style.fontFamily = 'Arial';
  document.body.appendChild(h1Elem);
}





const inputField = document.getElementById('username-input');
const confirmBtn = document.getElementById('confirm-btn');

// Add event listener for button click
confirmBtn.addEventListener('click', () => {
  const username = inputField.value;
  if (username) {
    alert(`Welcome, ${username}!`);
  } else {
    alert('Please enter your name');
  }
});

