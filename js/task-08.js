const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (e) => {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены!')
    }
    
    const userDetails = { email: email.value, Password: password.value }
    console.log(userDetails);
    
    e.currentTarget.reset()
});