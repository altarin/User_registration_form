import './index.scss';


//валидация email

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelector('input');
let errorMessageEmail = document.getElementById('errorMessageEmail');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {

	if (isEmailValid(inputEmail.value)) {
		inputEmail.style.borderColor = 'green';
	} else {
		inputEmail.style.borderColor = 'red';
        showError();
    }
}


inputEmail.addEventListener('input', onInput);


// function showError() {
//     errorMessageEmail.textContent = '* Поле E-mail заполнено не верно';
// }