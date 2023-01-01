// Need password to have ability to use all alphabetical characters in Lowercase
// Need password to have ability to use all alphabetical characters in Uppercase
// Need password to have ability to use all special characters
// Need password to have ability to use all numbers
// Need password to be a minimum of 8 characters
// Need password to be a maximum of 128 characters

const generateBtn = document.querySelector("#generate"); // Moved generateBtn to group with other variables. Part of original source code
const numbers = arrayForRandomPassword(48, 57); // Character codes used to clean up code
const lowerCase = arrayForRandomPassword(65, 90) 
const upperCase = arrayForRandomPassword(97, 122) 
const specialCharacters = arrayForRandomPassword(33, 47)
    .concat(arrayForRandomPassword(58, 64)
  ) .concat(arrayForRandomPassword(91, 96)
  ) .concat(arrayForRandomPassword(123, 126)
  )
let passLength = "";
let passArray = [];

console.log(numbers, lowerCase, upperCase, specialCharacters); // Console log to display character codes being used.

// Function for the initial alert window. 
function generatePassword(numbers, lowerCase, upperCase, specialCharacters) { // Trying to isolate variables within this function
  let userInput = window.prompt("How many characters would you like your password to contain?");
  let passLength = parseInt(userInput);
// Included alerts for if the user enters < 8 or > 128. Also included message with a return in the event the user enters something other than a number.
    if (isNaN(passLength)) {
        window.alert("Please enter only numeric characters.");
        return "You have input one or more alphabetic/special characters. Please try again."
        } else if (passLength < 8) {
          window.alert("Password must be between 8 and 128 characters.");
          return 'You have selected a number less than 8. Please try again.'; // Message displayed in the box to prompt the user to try again.
        } else if (passLength > 128) {
          window.alert("Password must be between 8 and 128 characters.");
          return 'You have selected a number greater than 128. Please try again.'; // Message displayed in the box to prompt the user to try again.
        } else if (userInput != isNaN(passLength)) {
          window.confirm("Click 'OK' to include numbers in your password.");
          passArray.push(numbers); // Added push to include user's option in the array for the password
          window.confirm("Click 'OK' to include lower case letters in your password.");
          passArray.push(lowerCase); // Added push to include user's option in the array for the password
          window.confirm("Click 'OK' to include upper case letters in your password.");
          passArray.push(upperCase); // Added push to include user's option in the array for the password
          window.confirm("Click 'OK' to include special characters in your password.");
          passArray.push(specialCharacters); // Added push to include user's option in the array for the password
          return;
      } 
} 

function arrayForRandomPassword(low, High) { // Attempting to add an additional array for math portion
  const array = [];
  for (let i = low; i <= High; i ++) { 
    array.push(i);
  } 
  return array;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.innerText = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
