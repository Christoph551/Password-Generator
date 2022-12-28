// Need password to have ability to use all alphabetical characters in Lowercase
// Need password to have ability to use all alphabetical characters in Uppercase
// Need password to have ability to use all special characters
// Need password to have ability to use all numbers
// Need password to be a minimum of 8 characters
// Need password to be a maximum of 149 characters


const generateBtn = document.querySelector("#generate"); // Moved generateBtn to group with other variables. Part of original source code
const numbers = [0,1,2,3,4,5,6,7,8,9] // Created constant for all numbers
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // Created constant for all lowercase letters
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // Created constant for all uppercase letters
const specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "'", ",", "<", ".", ">", "?"] // Created constant for all Special Characters.
let passLength = 8;

// Function for the initial alert window. Also included message with a return in the event the user enters something other than a number.
function generatePassword() {
  const userInput = window.prompt("How many characters would you like your password to contain?");
  const charLength = parseInt(userInput);
  if (isNaN(charLength)) {
    window.alert("Please enter only numeric characters.");
  } else (passLength < 8 || passLength > 128);
  passAlert = window.alert("Password must be between 8 and 128 characters.")
  return;
}
  if (passLength >= 8 && passLength <= 128) {
    numberQuestion = window.prompt("Click 'OK' to include numbers in your password?")
    lowerQuestion = window.prompt("Click 'OK' to include lower case letters in your password?")
    upperQuestion = window.prompt("Click 'OK' to include upper case letters in your password?")
    specialQuestion = window.prompt("Click 'OK' to include special characters in your password?")
  }

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

