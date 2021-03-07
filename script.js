// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatedPassword = ""; 
  var minLength = 8;
  var maxLength = 128;
  var lowerCaseChar = "abcdefghijklmnopqrstuvxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQPRSTUVWXYZ";
  var numbers = "1234567890";
  var special = "!@£$%^&*()";
  var characterCollection = ""; 
  

  var lengthRequested = parseInt(prompt("How long would you like your password to be? Must be more than 8 characters and less than 128"));
  

  if (minLength > lengthRequested) {
    alert("You have entered a number less than 8... please try again!");
    return "TRY AGAIN"
  }
  if (maxLength < lengthRequested) {
    alert("You have entred a number greater than 128... please try again");
    return "Try Again"
  }

  var wantsLowerCase = confirm("Do you want lower case characters?");
  var wantsUpperCase = confirm("Do you want upper case characters?");
  var wantsNumbers = confirm("Do you want numbers?");
  var wantsSpecial = confirm("Do you want special characters?");

  



  if (wantsLowerCase === true){
    characterCollection += lowerCaseChar
  }

  if(wantsUpperCase === true){
    characterCollection += upperCaseChar
  }

  if(wantsNumbers === true){
    characterCollection += numbers
  }

  if (wantsSpecial=== true){
    characterCollection += special
  }

  for  (var i = 0; i < lengthRequested; i++ ){
    generatedPassword += characterCollection[Math.floor(Math.random() * characterCollection.length)]
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
