// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  //Choose Password Length
  var length = passwordLength();
  var capital = capitalLetters();
  var special = specialCharacters();
  var num = includeNumbers();
  
};

// Get password length
var passwordLength = function() {
  var lengthInput = window.prompt("How long do you want your password to be? Please choose a number between 8 and 128.");

  if (lengthInput < 8 || lengthInput > 128) {
    window.alert("Incorrect value. Please choose a number between 8 and 128.");
    passwordLength();
  }

  return lengthInput;
};

// Add capital letters to password
var capitalLetters = function() {
  var capitalsInput = window.confirm("Would you like to include capital letters in your password?");

  if (capitalsInput === null) {
    window.alert("Please choose whether or not you'd like to include capital letters in your password.");
    capitalLetters();
  }

  return capitalsInput;
};

// Add special characters to password
var specialCharacters = function() {
  var specialInput = window.confirm("Would you like to include special characters in your password?");
 
  if (specialInput === null) {
    window.alert("Please choose whether or not you'd like to include special characters in your password.");
    specialCharacters();
  }

  return specialInput;
};

// Add numbers to password
var includeNumbers = function() {
  var numberInput = window.confirm("Would you like to include numbers in your password?");

  if (numberInput === null) {
    window.alert("Please choose whether or not you'd like to include numbers in your password.");
    includeNumbers();
  }

  return numberInput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
