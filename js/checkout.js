// Exercise 7

function validate(event) {
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  let fAddress = document.getElementById("fAddress");
  let lName = document.getElementById("fLastN");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  /* // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
 */

  checkName(fName);
  checkEmail(fEmail);
  checkAddress(fAddress);
  checkLastName(lName);
  checkPassWord(fPassword);
  checkPhone(fPhone);

  event.preventDefault();
  event.stopPropagation();
}

function checkName(fName) {
  let username = fName.value.trim();

  if (checkValidLength(username) === false) {
    fName.classList.add("is-invalid");
  } else if (checkOnlyLetters(username) === false) {
    fName.classList.add("is-invalid");
  } else {
    fName.classList.add("is-valid");
  }
}

function checkEmail(fEmail) {
  let userEmail = fEmail.value.trim();
  let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  if (checkValidLength(userEmail) === false) {
    fEmail.classList.add("is-invalid");
  } else if (userEmail.match(mailFormat) === false) {
    fEmail.classList.add("is-invalid");
  } else {
    return fEmail.classList.add("is-valid");
  }
}

function checkAddress(fAddress) {
  let userAddress = fAddress.value;

  if (checkValidLength(userAddress) === false) {
    fAddress.classList.add("is-invalid");
  } else {
    return fAddress.classList.add("is-valid");
  }
}

function checkLastName(lName) {
  let userLastName = lName.value.trim();

  if (checkValidLength(userLastName) === false) {
    lName.classList.add("is-invalid");
  } else if (checkOnlyLetters(userLastName) === false) {
    lName.classList.add("is-invalid");
  } else {
    return lName.classList.add("is-valid");
  }
}

function checkPassWord(fPassword) {
  let userPassword = fPassword.value.trim();

  if (checkValidLength(userPassword) === false) {
    fPassword.classList.add("is-invalid");
  } else if (checkNumbersAndLetters(userPassword) === false) {
    fPassword.classList.add("is-invalid");
  } else {
    fPassword.classList.add("is-valid");
  }
}

function checkPhone(fPhone) {
  let userPhone = fPhone.value.trim();

  if (checkOnlyNumbers(userPhone) === false) {
    fPhone.classList.add("is-invalid");
  } else if (userPhone.length < 9) {
    fPhone.classList.add("is-invalid");
  } else {
    fPhone.classList.add("is-valid");
  }
}

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
