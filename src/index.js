import './index.scss';


// //валидация email

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelector('input');
let errorMessageEmail = document.getElementById('errorMessageEmail');

    // errorMessageEmail.textContent = '* Поле E-mail заполнено не верно';


function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);

}

function onInput() {

	if (isEmailValid(inputEmail.value)) {
		inputEmail.style.borderColor = 'green';
	} else {
		inputEmail.style.borderColor = 'red';
    }
}
inputEmail.addEventListener('input', onInput);



// валидация пароля

let numbers = password.match(/\d+/g);
let uppers  = password.match(/[A-Z]/);
let lowers  = password.match(/[a-z]/);
let special = password.match(/[!@#$%\^&*\+]/);
// // не менее 8 символов


// const inputPass = document.getElementById("account__input");
// const errorMessagePass = document.getElementById("errorMessagePass");

