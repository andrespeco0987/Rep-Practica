"use strict";
/* IMPORTS */
/* VARIABLES */
const d = document;

const $signUp = d.getElementById("signUp");

const credentials = {
	name: null,
	nameValid: null,
	email: null,
	emailValid: null,
	password: null,
	passwordValid: null,
	passwordConfirm: null,
	passwordConfirmValid: null,
	phone: null,
	phoneValid: null,
	city: null,
	cityValid: null,
	country: null,
	countryValid: null,
	gender: null,
	genderValid: null,
	age: null,
	ageValid: null
};

let allowSubmit = false;

/* EVENTS */
d.addEventListener("DOMContentLoaded", () => {
	eventListeners();
});

/* FUNCTIONS */
function eventListeners() {
	$signUp.name.addEventListener("input", () => {
		checkInput("name");
	});
	$signUp.name.addEventListener("blur", () => {
		checkInput("name");
	});

	$signUp.email.addEventListener("input", () => {
		checkInput("email");
	});
	$signUp.email.addEventListener("blur", () => {
		checkInput("email");
	});

	$signUp.password.addEventListener("input", () => {
		checkInput("password");
	});
	$signUp.password.addEventListener("blur", () => {
		checkInput("password");
	});

	$signUp.passwordConfirm.addEventListener("input", () => {
		checkInput("passwordConfirm");
	});
	$signUp.passwordConfirm.addEventListener("blur", () => {
		checkInput("passwordConfirm");
	});

	$signUp.phone.addEventListener("input", () => {
		checkInput("phone");
	});
	$signUp.phone.addEventListener("blur", () => {
		checkInput("phone");
	});

	$signUp.city.addEventListener("input", () => {
		checkInput("city");
	});
	$signUp.city.addEventListener("blur", () => {
		checkInput("city");
	});

	$signUp.country.addEventListener("input", () => {
		checkInput("country");
	});
	$signUp.country.addEventListener("blur", () => {
		checkInput("country");
	});

	$signUp.gender.addEventListener("input", () => {
		checkInput("gender");
	});
	$signUp.gender.addEventListener("blur", () => {
		checkInput("gender");
	});

	$signUp.age.addEventListener("input", () => {
		checkInput("age");
	});
	$signUp.age.addEventListener("blur", () => {
		checkInput("age");
	});

	$signUp.addEventListener("submit", handleSubmit);
}

function checkInput(inputName) {
	if (inputName === "name") {
		const $nameWarning = d.getElementById("nameWarning");
		credentials.name = $signUp.name.value.trim();
		credentials.nameValid = false;
		if (credentials.name == "") {
			$nameWarning.textContent = "Please, enter your name";
		} else {
			$nameWarning.textContent = "";
			credentials.nameValid = true;
		}
	}
	if (inputName === "email") {
		const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const $emailWarning = d.getElementById("emailWarning");
		credentials.email = $signUp.email.value.trim();
		credentials.emailValid = false;
		if (credentials.email == "") {
			$emailWarning.textContent = "Please, enter your email address";
		} else if (!regExp.test(credentials.email)) {
			$emailWarning.textContent = "Please, enter a valid email address";
		} else {
			$emailWarning.textContent = "";
			credentials.emailValid = true;
		}
	}
	if (inputName === "password") {
		const $passwordWarning = d.getElementById("passwordWarning");
		credentials.password = $signUp.password.value.trim();
		credentials.passwordValid = false;
		if (credentials.password == "") {
			$passwordWarning.textContent = "Please, enter your password";
		} else if (credentials.passwordConfirm && credentials.password != credentials.passwordConfirm) {
			$passwordWarning.textContent = "Your password doesn't match";
		} else {
			$passwordWarning.textContent = "";
			credentials.passwordValid = true;
		}
	}
	if (inputName === "passwordConfirm") {
		const $passwordConfirmWarning = d.getElementById("passwordConfirmWarning");
		credentials.passwordConfirm = $signUp.passwordConfirm.value.trim();
		credentials.passwordConfirmValid = false;
		if (credentials.passwordConfirm == "") {
			$passwordConfirmWarning.textContent = "Please, confirm your password";
		} else if (credentials.password && credentials.passwordConfirm != credentials.password) {
			$passwordConfirmWarning.textContent = "Your password doesn't match";
		} else {
			$passwordConfirmWarning.textContent = "";
			credentials.passwordConfirmValid = true;
		}
	}
	if (inputName === "phone") {
		const regExp = /^[0-9]{10}$/;
		const $phoneWarning = d.getElementById("phoneWarning");
		credentials.phone = $signUp.phone.value.trim();
		credentials.phoneValid = false;
		if (credentials.phone == "") {
			$phoneWarning.textContent = "Please, enter your phone number";
		} else if (!regExp.test(credentials.phone)) {
			$phoneWarning.textContent = "Please, enter a valid phone number";
		} else {
			$phoneWarning.textContent = "";
			credentials.phoneValid = true;
		}
	}
	if (inputName === "city") {
		const $cityWarning = d.getElementById("cityWarning");
		credentials.city = $signUp.city.value.trim();
		credentials.cityValid = false;
		if (credentials.city == "") {
			$cityWarning.textContent = "Please, enter your city";
		} else {
			$cityWarning.textContent = "";
			credentials.cityValid = true;
		}
	}
	if (inputName === "country") {
		const $countryWarning = d.getElementById("countryWarning");
		credentials.country = $signUp.country.value.trim();
		credentials.countryValid = false;
		if (credentials.country == "") {
			$countryWarning.textContent = "Please, enter your country";
		} else {
			$countryWarning.textContent = "";
			credentials.countryValid = true;
		}
	}
	if (inputName === "gender") {
		const $genderWarning = d.getElementById("genderWarning");
		credentials.gender = $signUp.gender.value.trim();
		credentials.genderValid = false;
		if (credentials.gender == "") {
			$genderWarning.textContent = "Please, select your gender";
		} else {
			$genderWarning.textContent = "";
			credentials.genderValid = true;
		}
	}
	if (inputName === "age") {
		const $ageWarning = d.getElementById("ageWarning");
		credentials.age = $signUp.age.value.trim();
		credentials.ageValid = false;
		if (credentials.age == "") {
			$ageWarning.textContent = "Please, enter your age";
		} else if (isNaN(credentials.age)) {
			$ageWarning.textContent = "Please, enter a valid age";
		} else if (credentials.age < 18) {
			$ageWarning.textContent = "You must be at least 18 years old";
		} else {
			$ageWarning.textContent = "";
			credentials.ageValid = true;
		}
	}
	setAllowSubmit();
}

function setAllowSubmit() {
	allowSubmit =
		credentials.nameValid &&
		credentials.emailValid &&
		credentials.passwordValid &&
		credentials.passwordConfirmValid &&
		credentials.phoneValid &&
		credentials.cityValid &&
		credentials.countryValid &&
		credentials.genderValid &&
		credentials.ageValid;
	if (allowSubmit) {
		$signUp.submitButton.removeAttribute("disabled");
	} else {
		$signUp.submitButton.setAttribute("disabled", true);
	}
}

function handleSubmit(event) {
	event.preventDefault();
	if (allowSubmit) {
		console.log("submit: ", {
			name: credentials.name,
			email: credentials.email,
			password: credentials.password,
			phone: credentials.phone,
			city: credentials.city,
			country: credentials.country,
			gender: credentials.gender,
			age: credentials.age
		});
		console.log("send data to backend for processing");
		$signUp.reset();
		window.location.href = "http://127.0.0.1:5500/vanilla/html/private.html";
		/* window.location.replace(
      'http://127.0.0.1:5500/docs/ejemplos/vanilla/private.html'
    ); */
	} else {
		console.log("notify the user and do not allow sending data");
	}
}
/* CODE */
