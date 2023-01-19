// Assignment Code - assigns the code to the button id="generate"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); //links to the password ID in the textarea

  passwordText.value = password;

}

function generatePrompt() { //This is linked to work onlick of the button
  let passwordButton = prompt("How many characters would you like your password to be? Must be between 8-128 characters")
}

// Arrays for all password outcome variables

  let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
  let lowerCase = "qwertyuiopasdfghjklzxcvbnm"
  let numbers = "1234567890"
  let specialChar = "!@#$"


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
