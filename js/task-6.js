function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const input = document.querySelector('input[type="number"]');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  destroyBoxes();
  let boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = color;
    fragment.appendChild(box);
    boxSize += 10;
  }
  boxesContainer.appendChild(fragment);
}

const destroyButton = document.querySelector('[data-destroy]');

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

const button1 = document.querySelector('button[data-create]');
const button2 = document.querySelector('button[data-destroy]');
button1.classList.add('button1');
button2.classList.add('button2');
