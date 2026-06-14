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
  console.log("working");

  if (
    !includeUpperCase.checked &&
    !includeLowerCase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  ) {
    alert("Please select at lease one option!");
  }
}
