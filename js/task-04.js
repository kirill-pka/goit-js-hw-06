const decrementBtn = document.querySelector('[data-action=decrement]');
const incrementBtn = document.querySelector('[data-action=increment]');
const valueEl = document.querySelector('#value');

let counterValue = 0

incrementBtn.addEventListener('click', function () {

    counterValue += 1;
    valueEl.textContent = counterValue;
})

decrementBtn.addEventListener('click', function () {

    counterValue -= 1;
    valueEl.textContent = counterValue;

})
