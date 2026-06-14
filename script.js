const password = document.getElementById("password");
const rangeBar = document.getElementById("password-length");
const rangeValue = document.getElementById("length-value");
const includeUpperCase = document.getElementById("includeUppercase");
const includeLowerCase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const genPassBtn = document.getElementById("generatePassword");

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_?";

genPassBtn.addEventListener("click", generatePassword);

rangeBar.addEventListener("input", () => {
  rangeValue.textContent = rangeBar.value;
});

function generatePassword() {
  if (
    !includeUpperCase.checked &&
    !includeLowerCase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    alert("Please select at lease one option!");
  } else {
    const newPassword = createNewPassword(rangeBar.value);

    updateUserInterface(newPassword);
  }
}

function createNewPassword(length) {
  let password = "";
  let characters = "";

  characters += includeUpperCase.checked ? UPPERCASE : "";
  characters += includeLowerCase.checked ? LOWERCASE : "";
  characters += includeNumbers.checked ? SYMBOLS : "";
  characters += includeSymbols.checked ? NUMBERS : "";

  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

function updateUserInterface(newPassword) {
  password.value = newPassword;
}
