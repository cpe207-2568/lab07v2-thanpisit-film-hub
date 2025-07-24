// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordconfirm = document.querySelector("#password-confirm-input")
// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");
// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
}

passwordconfirmInput.onkeyup = () => {
  passwordconfirmInput.classList.remove("is-valid");
  passwordconfirmInput.classList.remove("is-invalid");
}
// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  islastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isPasswordConfirmOk = false;
  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  let Ans = valideteEmail(emailInput);
  if (Ans === false) emailInput.classList.add("is-invalid");
  else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  if (passwordInput.value === "") {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  if (passwordconfirmInput.value === "" || passwordconfirmInput !== passwordInput) {
    passwordconfirmInput.classList.add("is-invalid");
  } else {
    passwordconfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  }
  // validate last name

  // validate email

  // validate password

  // validate confirm password

  if (isFirstNameOk == true && isLastNameOk == true && isEmailOk == true && isPasswordOk == true && isPasswordConfirm == Ok) alert("Registered successfully");
};

resetBtn.onclick = () => {
  firstNameInput = ""
  lastNameInput = ""
  emailInput = ""
  passwordInput = ""
  passwordconfirm = ""

  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid"); 
  passwordConfirmInput.classList.remove("is-invalid")
  passwordConfirmInput.classList.remove("is-valid")
}
// add callback function for Reset button.
