const password = document.getElementById("password");
const rangeBar = document.getElementById("password-length");
const rangeValue = document.getElementById("length-value");
const includeUpperCase = document.getElementById("includeUppercase");
const includeLowerCase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const genPassBtn = document.getElementById("generatePassword");
const strengthBar = document.getElementById("meter");
const strengthType = document.getElementById("strength-type");
const copyBtn = document.getElementById("copyBtn");

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_?";

genPassBtn.addEventListener("click", generatePassword);
window.addEventListener("DOMContentLoaded", generatePassword);

rangeBar.addEventListener("input", () => {
  rangeValue.textContent = rangeBar.value;
});

copyBtn.addEventListener("click", copyPassword);

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

    updateUserInterface(rangeBar.value, newPassword);
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

function updateUserInterface(length, newPassword) {
  password.value = newPassword;

  let defPoints = 0;

  defPoints += Math.min(length * 2, 40);

  if (/[A-Z]/.test(newPassword)) defPoints += 15;
  if (/[a-z]/.test(newPassword)) defPoints += 15;
  if (/[0-9]/.test(newPassword)) defPoints += 15;
  if (/[!@#$%^&*()_?]/.test(newPassword)) defPoints += 15;

  if (length < 8) {
    defPoints = Math.min(defPoints, 40);
  }

  defPoints = Math.max(Math.min(defPoints, 100), 25);

  if (defPoints < 40) {
    strengthType.textContent = "Weak";
    strengthBar.style.backgroundColor = "#e55e5e";
  } else if (defPoints >= 40 && defPoints <= 75) {
    strengthType.textContent = "Medium";
    strengthBar.style.backgroundColor = "#e8e89c";
  } else if (defPoints >= 75) {
    strengthType.textContent = "Strong";
    strengthBar.style.backgroundColor = "#89e976";
  }

  rangeValue.textContent = rangeBar.value;
  strengthBar.style.width = parseInt(defPoints) + "%";
}

function copyPassword() {
  navigator.clipboard
    .writeText(password.value)
    .then(() => console.log("copied"))
    .catch((err) => console.log(err));

  copyBtn.classList.remove("fa-regular", "fa-copy");
  copyBtn.classList.add("fa-solid", "fa-check");

  setTimeout(() => {
    copyBtn.classList.remove("fa-solid", "fa-check");
    copyBtn.classList.add("fa-regular", "fa-copy");
  }, 500);
}
