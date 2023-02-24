let inputEl = document.querySelector('#validation-input');
let inputLength = document.querySelector('[data-length="6"]');

inputEl.addEventListener('change', (e) => {

    if (e.currentTarget.value.length === Number(inputEl.dataset.length)) {
      inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');
    } else {
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
    }
});