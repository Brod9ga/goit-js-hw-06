const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const name = event.target.value.trim();
  if (name.length > 0) {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});