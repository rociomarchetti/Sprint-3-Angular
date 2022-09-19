// Exercise 7

const form = document.getElementById("myForm");
/* const inputs = form.getElementsByTagName("input"); */

function validate(event) {
  let error = 0;
  let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  // Get the input fields
  var fName = document.getElementById("fName");
  let username = fName.value.trim();
  var fEmail = document.getElementById("fEmail");
  let userEmail = fEmail.value.trim();
  let fAddress = document.getElementById("fAddress");
  let userAddress = fAddress.value;
  let lName = document.getElementById("fLastN");
  let userLastName = lName.value.trim();
  let fPassword = document.getElementById("fPassword");
  let userPassword = fPassword.value.trim();
  let fPhone = document.getElementById("fPhone");
  let userPhone = fPhone.value.trim();

  if (checkValidLength(username) === false) {
    fName.classList.add("is-invalid");
    error++;
  }
  if (checkOnlyLetters(username) === false) {
    fName.classList.add("is-invalid");
    error++;
  }
  if (checkValidLength(userEmail) === false) {
    fEmail.classList.add("is-invalid");
    error++;
  }
  if (userEmail.match(mailFormat) === false) {
    fEmail.classList.add("is-invalid");
    error++;
  }
  if (checkValidLength(userAddress) === false) {
    fAddress.classList.add("is-invalid");
    error++;
  }
  if (checkValidLength(userLastName) === false) {
    lName.classList.add("is-invalid");
    error++;
  }
  if (checkOnlyLetters(userLastName) === false) {
    lName.classList.add("is-invalid");
    error++;
  }
  if (checkValidLength(userPassword) === false) {
    fPassword.classList.add("is-invalid");
    error++;
  }
  if (checkNumbersAndLetters(userPassword) === false) {
    fPassword.classList.add("is-invalid");
    error++;
  }
  if (checkOnlyNumbers(userPhone) === false) {
    fPhone.classList.add("is-invalid");
    error++;
  }
  if (userPhone.length < 9) {
    fPhone.classList.add("is-invalid");
    error++;
  }

  if (error > 0) {
    alert("Error");
  } else {
    fName.classList.add("is-valid");
    fEmail.classList.add("is-valid");
    fAddress.classList.add("is-valid");
    lName.classList.add("is-valid");
    fPassword.classList.add("is-valid");
    fPhone.classList.add("is-valid");
    alert("OK");
  }

  event.preventDefault();
  event.preventPropagation();
}

/* function validate(event) {
  event.preventDefault();

  let errMessage = document.getElementById("submit-error");
  const form = document.getElementById("myForm");

  if (
    checkName() === true &&
    checkEmail() === true &&
    checkAddress() === true &&
    checkLastName() === true &&
    checkPassWord() === true &&
    checkPhone() === true
  ) {
    form.submit();
  } else {
    errMessage.innerHTML = "Please fix the error to submit";
  }
}
 */

/* function checkName() {
  if (checkValidLength(username) === false) {
    fName.classList.add("is-invalid");
    
  } else if (checkOnlyLetters(username) === false) {
    fName.classList.add("is-invalid");
    
  } else {
    fName.classList.add("is-valid");
    
  }
} */

/* function checkEmail() {
  let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if (checkValidLength(userEmail) === false) {
    fEmail.classList.add("is-invalid");
    return false;
  } else if (userEmail.match(mailFormat) === false) {
    fEmail.classList.add("is-invalid");
    return false;
  } else {
    fEmail.classList.add("is-valid");
    return true;
  }
} */

/* function checkAddress() {
  if (checkValidLength(userAddress) === false) {
    fAddress.classList.add("is-invalid");
    return false;
  } else {
    fAddress.classList.add("is-valid");
    return true;
  }
} */

/* function checkLastName() {
  if (checkValidLength(userLastName) === false) {
    lName.classList.add("is-invalid");
    return false;
  } else if (checkOnlyLetters(userLastName) === false) {
    lName.classList.add("is-invalid");
    return false;
  } else {
    lName.classList.add("is-valid");
    return true;
  }
} */

/* function checkPassWord() {
  if (checkValidLength(userPassword) === false) {
    fPassword.classList.add("is-invalid");
    return false;
  } else if (checkNumbersAndLetters(userPassword) === false) {
    fPassword.classList.add("is-invalid");
    return false;
  } else {
    fPassword.classList.add("is-valid");
    return true;
  }
} */

/* function checkPhone() {
  if (checkOnlyNumbers(userPhone) === false) {
    fPhone.classList.add("is-invalid");
    return false;
  } else if (userPhone.length < 9) {
    fPhone.classList.add("is-invalid");
    return false;
  } else {
    fPhone.classList.add("is-valid");
    return false;
  }
} */

function checkOnlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function checkNumbersAndLetters(str) {
  return /^(?=.*\d)(?=.*[0-9])(?=.*[a-zA-Z]).{4,8}$/.test(str);
  //To check a password between 4 to 8 characters which contain at least one numeric digit, one uppercase and one lowercase letter
}

function checkOnlyNumbers(num) {
  return /^[0-9]+$/.test(num);
}

function checkValidLength(str) {
  if (str.length === 0 || str.length < 3) {
    return false;
  }
}

/* An email is a string (a subset of ASCII characters) separated into two parts by @ symbol. a "personal_info" and a domain, that is personal_info@domain. The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.

The personal_info part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots. */
/* 
Source: https://www.w3resource.com/javascript/form/email-validation.php */
