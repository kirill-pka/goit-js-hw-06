const refs = {
    input: document.querySelector('#name-input'),
    nameLeble: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', outImputChange)

function outImputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLeble.textContent = event.target.value;
    
    if(event.target.value.trim() === ""){
        refs.nameLeble.textContent = 'Anonymous'  
    }
}