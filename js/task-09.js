function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const textValue = document.querySelector('.color');


btn.addEventListener('click', () => {
  let hexColor = getRandomHexColor()
  body.style.backgroundColor = hexColor
  textValue.textContent = hexColor;
});