const form = document.querySelector('form.login-form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', event => {
  event.preventDefault();
  if ([...inputs].some(input => input.value.trim() === '')) {
    alert('All form fields must be filled in');
  } else {
    const inputNames = {};
    for (const element of form.elements) {
      if (element.name) {
        inputNames[element.name] = element.value.trim();
      }
    }
    console.log(inputNames);
    form.reset();
  }
});
