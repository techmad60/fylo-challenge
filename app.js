const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const invalidEmailError = document.getElementById('invalid-email-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const emailRegex = /\S+@\S+\.\S+/;

    if(!emailRegex.test(email)) {
        invalidEmailError.style.display = 'block';
        emailError.style.display = 'none';
    }

    else {
        emailError.style.display = 'block';
        invalidEmailError.style.display = 'none';
    }
});

const formTwo = document.getElementById('form-two')
const emailInputTwo = document.getElementById('email-two');
const emailErrorTwo = document.getElementById('email-error-two');
const invalidEmailErrorTwo = document.getElementById('invalid-email-error-two');

formTwo.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInputTwo.value;
    const emailRegex = /\S+@\S+\.\S+/;

    if(!emailRegex.test(email)) {
        invalidEmailErrorTwo.style.display = 'block';
        emailErrorTwo.style.display = 'none';
    }

    else {
        emailErrorTwo.style.display = 'block';
        invalidEmailErrorTwo.style.display = 'none';
    }
});

