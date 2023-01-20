

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//This function generates a random password based upon user prompts
function generatePassword() {

  // Strings to identify possible characters in generated password
  let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let lowerCase = "qwertyuiopasdfghjklzxcvbnm";
  let numbers = "0123456789";
  let specialChars = "!@#$";

  let generatedPassword = ""; //Empty string to be filled by function later. Will serve as the final password for the user
  let requiredCharactersString = ""; //Empty string to concatenate with character variables

  let charLength = prompt(
    "Please select between 8-128 characters for your password");

  while (charLength < 8 || charLength > 128) { //While loop in case the users selection is not between 8-128
    charLength = prompt(
      "Select a number between 8-128.");
  };
  console.log(charLength); //Log character length to console

  let includeLowerCase = confirm( //Variable to add a lowercase character with confirm method
    "Do you want to include lowercase characters?");
     console.log(includeLowerCase); //log lowercase boolean entry

  if (includeLowerCase) { //If includeLowerCase boolean is true, then requiredCharactersString will concatenate with lowerCase string
    requiredCharactersString = requiredCharactersString.concat(
      lowerCase);
      console.log(requiredCharactersString) //Logs current password array
  }

  let includeUpperCase = confirm( //Variable to add a upperCase character with confirm method
    "Do you want to include uppercase characters?");
    console.log(includeUpperCase); //Logs uppercase boolean entry

  if (includeUpperCase) { //If includerUpperCase boolean is true, then requiredCharactersString will concatenate with upperCase
    requiredCharactersString = requiredCharactersString.concat( 
      upperCase);
      console.log(requiredCharactersString);//logs current password array
  }

  let includeNumbers = confirm("Do you want to include numbers?"); //Variable to add a number character with confirm method
      console.log(includeNumbers); //Logs number boolean entry

  if (includeNumbers) { //if includeNumbers boolean is true, then requiredCharactersString will concatenate with numbers variable
    requiredCharactersString = requiredCharactersString.concat(
      numbers); 
      console.log(requiredCharactersString); //logs current password array
  }

  let includeSpecial = confirm("Do you want to include special characters?"); //Variable to add Special Characters with confirm method
      console.log(includeSpecial);//special character boolean entry

  if (includeSpecial) { //If includeSpecial boolean is true, then requiredCharactersString will concatenate with specialChars variable
    requiredCharactersString = requiredCharactersString.concat(
      specialChars);
      console.log(requiredCharactersString); //logs current password array
  }


  for (let i = 0; i < charLength; i++) { //For loop to get the index equal to the users input at charLength
    let random = Math.floor(Math.random() * requiredCharactersString.length); //creates the variable random when a random number rounded down multiplied by the amount of characters in requiredCharactersString
      generatedPassword = generatedPassword.concat( //Adds required characters to appropriate length
      requiredCharactersString.charAt(random)
    );
  }

  return generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //calls function writePassword
