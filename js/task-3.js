const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', event => {
  const name = event.target.value.trim();
  if (name !== '') {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
