const inputCount = document.getElementById('controls').querySelector('input');
const createButton = document.getElementById('controls').querySelector('[data-create]');
const destroyButton = document.getElementById('controls').querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createButton.addEventListener('click', () => {
  const count = parseInt(inputCount.value);

  if (isNaN(count) || count < 1 || count > 100) {
    alert('Invalid input. Please enter a number between 1 and 100.');
    return;
  }

  destroyBoxes(); 
  createBoxes(count);
  inputCount.value = '';
});
destroyButton.addEventListener('click', destroyBoxes);