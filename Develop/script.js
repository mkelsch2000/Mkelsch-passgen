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
debugger;
  var length = passwordLength();
  console.log(length);

  if (lowerCase()) {
    var lowCase = "abcdefghijklmnopqrstuvwxyz";
  }
  else {
    lowCase = "";
  }

  if (capitalLetters()) {
    var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else {
    capital = "";
  }

  if (specialCharacters()) {
    var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  else {
    special = "";
  }

  if (includeNumbers()) {
    var num = "0123456789";
  }
  else {
    num = "";
  }

  var givenPassword = "";
  var combinedChars = lowCase + capital + special + num;
  var combinedCharsLength = combinedChars.length;
  for ( var i = 0; i < length; i++ ) {
    givenPassword += combinedChars.charAt(Math.floor(Math.random() * combinedCharsLength));
  }

  return givenPassword;
  
};




// Get password length
const passwordLength = function() {
  var lengthInput;
  while ((lengthInput = window.prompt("How long do you want your password to be? Please choose a number between 8 and 128.")), lengthInput < 8 || lengthInput > 128) 
    window.alert("Incorrect value. Please choose a number between 8 and 128.");
  return lengthInput;
};

// Include small caps in password
const lowerCase = function() {
  var lowCase;
  while ((lowCase = window.confirm("Would you like to include lower-case letters in your password?")), lowCase === null)
    window.alert("No answer given. Please choose whether or not you'd like to include small-caps letters in your password.");
  return lowCase;
}

// Add capital letters to password
const capitalLetters = function() {
  var capitalsInput;
  while ((capitalsInput = window.confirm("Would you like to include upper-case letters in your password?")), capitalsInput === null)
    window.alert("No answer given. Please choose whether or not you'd like to include capital letters in your password.");
  return capitalsInput;
};

// Add special characters to password
const specialCharacters = function() {
  var specialInput;
  while ((specialInput = window.confirm("Would you like to include special characters in your password?")), specialInput === null)
    window.alert("Please choose whether or not you'd like to include special characters in your password.");
  return specialInput;
};

// Add numbers to password
const includeNumbers = function() {
  var numberInput;

  while ((numberInput  = window.confirm("Would you like to include numbers in your password?")), numberInput === null)
    window.alert("Please choose whether or not you'd like to include numbers in your password.");
  return numberInput;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
