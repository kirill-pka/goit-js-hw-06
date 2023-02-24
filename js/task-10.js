const divRef = document.querySelector('#controls');
const imputRef = document.querySelector('input');

const createRef = document.querySelector('[data-create]');
const destroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


createRef.addEventListener('click', createBoxes)

function createBoxes(amount) {
  amount = Number(imputRef.value);
  const allBoxes = [];

  for (let i = 1; i <= amount; i +=1 ) {
    let newBox = document.createElement('div');
    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.height = `${30 + 10 * i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    allBoxes.push(newBox)
  }

  boxesRef.append(...allBoxes);
  allBoxes.langth = 0;
};


destroyRef.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesRef.innerHTML = ''; 
};
