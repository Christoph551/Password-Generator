// Need password to have ability to use all alphabetical characters in Lowercase
// Need password to have ability to use all alphabetical characters in Uppercase
// Need password to have ability to use all special characters
// Need password to have ability to use all numbers
// Need password to be a minimum of 8 characters
// Need password to be a maximum of 128 characters

let generateBtn = document.querySelector("#generate"); // Moved generateBtn to group with other variables. Part of original source code
let numbers = [0,1,2,3,4,5,6,7,8,9] // Created variable for all numbers
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] // Created variable for all lowercase letters
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // Created variable for all uppercase letters
let specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", "'", ",", "<", ".", ">", "?"] // Created variable for all Special Characters.

console.log(numbers, lowerCase, upperCase, specialCharacters); // Console log to display character codes being used.

// Function for the initial alert window. 
function generatePassword() { // Trying to isolate variables within this function
  let randomPassword = "";
  let storePass = [];
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
            if (window.confirm("Click 'OK' to include numbers in your password.")) {
            storePass.push(numbers); // Added push to include user's option in the array for the password

          } else {
            console.log("No Numbers")
          }
            if (window.confirm("Click 'OK' to include lower case letters in your password.")) {
            storePass.push(lowerCase); // Added push to include user's option in the array for the password

          } else {
            console.log("No Lower Case")
          }
          if (window.confirm("Click 'OK' to include upper case letters in your password.")) {
            storePass.push(upperCase); // Added push to include user's option in the array for the password

          } else {
            console.log("No Upper Case")
          }
          if (window.confirm("Click 'OK' to include special characters in your password.")) {
            storePass.push(specialCharacters); // Added push to include user's option in the array for the password

          } else {
            console.log("No Special Characters")
          }
          console.log(storePass)
      } 

function createRandom(min, max) { // Referenced this function from Stack Overflow.
  let ran = Math.random() 
  if (!max) {
    max = min
    min = 0
  }
  return Math.floor(min*(1- ran) + ran*max) // Randomizer to return random characters.

} function randomGeneration(list) {
  return list[createRandom(list.length)] 
}
    for (let i = 0; i < passLength; i++) {
      let randomList = randomGeneration(storePass);
      let randomChar = randomGeneration(randomList);
      randomPassword += randomChar
} 
console.log(randomPassword) // Console log displays random password as well.
return randomPassword
} 

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
