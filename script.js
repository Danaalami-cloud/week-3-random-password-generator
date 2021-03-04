// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var minLength = 8;
  var maxLength = 128;
  var lowerCaseChar = "abcdefghijklmnopqrstuvxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOQPRSTUVWXYZ";
  var numbers = "1234567890";
  var special = "!@£$%^&*()";

  var lengthRequested = parseInt(prompt("How long would you like your password to be?"));

  if (minLength > lengthRequested) {
    alert("You have entered a number less than 8... please try again!");
    return "TRY AGAIN"
  }
  if (maxLength < lengthRequested) {
    alert("You have entred a number greater than 128... please try again");
    return "Try Again"
  }

  return "password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
