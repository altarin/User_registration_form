import './index.scss';


//валидация email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;
let specialSym = /[!@#$%\^&*\+]/g;



const inputEmail = document.getElementById('input-email');
let errorMessageEmail = document.getElementById('errorMessageEmail');

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function validateEmail() {

	if (isEmailValid(inputEmail.value)) {
		inputEmail.style.borderColor = 'green';
		errorMessageEmail.textContent = '';
	} else {
		inputEmail.style.borderColor = 'red';
		errorMessageEmail.textContent = '* Поле E-mail заполнено не верно';
    }
}


// валидация пароля

let inputPass = document.getElementById("input-pass");

let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let special = document.getElementById("special");

// Когда пользователь нажимает на поле Пароль, отображается окно сообщения
inputPass.onfocus = function() {
	document.getElementById("pswd_info").style.display = "block";
}

// Когда пользователь щелкает за пределами поля пароля, скрыть окно сообщения
inputPass.onblur = function() {
	document.getElementById("pswd_info").style.display = "none";
}

// Когда пользователь начинает вводить что-то в поле пароля
inputPass.onkeyup = function() {

  // Проверка строчных букв

if(inputPass.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
} else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Проверка заглавных букв

if(inputPass.value.match(upperCaseLetters)) {
	capital.classList.remove("invalid");
    capital.classList.add("valid");
} else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}

  // Проверка чисел

if(inputPass.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
} else {
    number.classList.remove("valid");
    number.classList.add("invalid");
}

// Проверить спец символы

if(inputPass.value.match(specialSym)) {
	special.classList.remove("invalid");
	special.classList.add("valid");
} else {
	special.classList.remove("valid");
	special.classList.add("invalid");
}
	

  // Проверить длину
if(inputPass.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
} else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}
}

function validatePass(){
	if( (inputPass.value.match(lowerCaseLetters)) && (inputPass.value.match(upperCaseLetters)) ){
		errorMessagePass.textContent = '';
        inputPass.style.borderColor = 'green';
	} else {
		errorMessagePass.textContent = '* Поле "Пароль" заполнено не верно';
        inputPass.style.borderColor = 'red';
	}
}

// валидация повтора пароля

function validateEmailConfirm() {
let inputPassConfirm = document.getElementById('input-pass-conf');
let errorMessagePassConfirm = document.getElementById('errorMessagePassConfirm');
		if (inputPass.value === inputPassConfirm.value) {
			inputPassConfirm.style.borderColor = 'green';
			errorMessagePassConfirm.textContent = '';
		} else {
			inputPassConfirm.style.borderColor = 'red';
			errorMessagePassConfirm.textContent = '* Поле "Повторный пароль" заполнено не верно';
	    }
	}


    document.querySelector('.account__button').addEventListener('click', () => {
        validateEmail();
        validatePass();
        validateEmailConfirm();
    });