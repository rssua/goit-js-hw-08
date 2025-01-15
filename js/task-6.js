function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxArr = [''];
  for (let index = 0; index < amount; index++) {
    boxArr[index] = `<div style="width:${(index + 3) * 10}px; height:${
      (index + 3) * 10
    }px; background-color:${getRandomHexColor()};"></div>`;
  }
  boxes.innerHTML = boxArr.join('');
}

function destroyBoxes() {
  boxes.innerHTML = '';
  number = 0;
}

const input = document.querySelector('[type="number"]');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

input.addEventListener('change', () => {});

let number = 0;

create.addEventListener('click', () => {
  if (input.value >= 1 && input.value <= 100) {
    number = input.value;
  }
  input.value = '';
  if (number > 0) {
    createBoxes(number);
  }
});

destroy.addEventListener('click', destroyBoxes);
