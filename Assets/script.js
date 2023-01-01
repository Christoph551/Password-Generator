// Need password to have ability to use all alphabetical characters in Lowercase
// Need password to have ability to use all alphabetical characters in Uppercase
// Need password to have ability to use all special characters
// Need password to have ability to use all numbers
// Need password to be a minimum of 8 characters
// Need password to be a maximum of 128 characters

const generateBtn = document.querySelector("#generate"); // Moved generateBtn to group with other variables. Part of original source code
const numbers = [0,1,2,3,4,5,6,7,8,9] // Created constant for all numbers
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // Created constant for all lowercase letters
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // Created constant for all uppercase letters
const specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "'", ",", "<", ".", ">", "?"] // Created constant for all Special Characters.
let passLength = "";
let storePass = [];

// Function for the initial alert window. Also included message with a return in the event the user enters something other than a number.
function generatePassword() {
  let userInput = window.prompt("How many characters would you like your password to contain?");
  let passLength = parseInt(userInput);
// If one of the below parameters are met, then the logic continues to move on to the following function's questions. Need to fix!!!

// ___________________________________________________________________________________________________________________________________
// Included alerts for if the user enters < 8 or > 128
    if (isNaN(passLength)) {
        window.alert("Please enter only numeric characters.");
        return "You have input one or more alphabetic/special characters. Please try again."
        } else if (passLength < 8) {
          window.alert("Password must be between 8 and 128 characters.");
          return 'You have selected a number less than 8. Please try again.'; // Message displayed in the box to prompt the user to try again.
        } else if (passLength > 128) {
          window.alert("Password must be between 8 and 128 characters.");
          return; // Message displayed in the box to prompt the user to try again.
        } else if (userInput != isNaN(passLength)) {
          window.confirm("Click 'OK' to include numbers in your password.");
          window.confirm("Click 'OK' to include lower case letters in your password.");
          window.confirm("Click 'OK' to include upper case letters in your password.");
          window.confirm("Click 'OK' to include special characters in your password.");
          return;
      } if (includeNumbers) {
        storePass.push(numbers);
      }
      if (includeLowerCase) {
        storePass.push(lowerCase);
      }
      if (includeUpperCase) {
        storePass.push(upperCase);
      }
      if (includeSpecial) {
        storePass.push(specialCharacters);
      }
} 
// Write password to the #password input
function writePassword(min, max) {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  let randomize = Math.random();
    if (!max) {
      max = min;
      min = 0;
  }
  passwordText.value = password;
  return Math.floor(min*(1- randomize) + randomize*max)
}

function randomizing(list) {
  return list[randomize(list.length)]
} for (var i = 0; i < passLength; i++) {
  let randomList = randomizing(storePass);
  let randomChar = randomizing(randomList);
  passLength = randomChar;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
