//Global arrays and variables

const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];

var confirmLowerCase;
var comfirmUpperCase;
var confirmNumbers;
var confirmSpecialChar;
var passwordLength;
var passwordString = [""];
var finalPassword = "";

//generate password function
function generatePassword() {

  /*Reset all input variables to empty so the application can be run as expected multiple times without
  refreshing the browser to clear variables*/
  confirmLowerCase = "";
  comfirmUpperCase = "";
  confirmNumbers = "";
  confirmSpecialChar = "";
  passwordLength = "";
  passwordString = [""];
  finalPassword = "";

  //when user clicks generate password, ask them what the length should be between 8-128 and validate their input
  passwordLength = prompt("Please input the desired length of your password from 8 to 128 characters.");
  //if user selects cancel on window prompt, the application will stop. They can start again by clicking generate password.
  if (passwordLength === null) {
    return;
  }

  /*Loop that will run through the confirm length prompt while the password length entered does not meet requirements...
  pwd must be greater than 7 but less than 129 and must be a number*/
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must choose a length between 8-128. This field only accepts numbers.")
    passwordLength = prompt("Please input the desired length of your password from 8 to 128 characters.");
    //if user selects cancel on window prompt, the application will stop. They can start again by clicking generate password.
    if (passwordLength === null) {
      return;
    }
  }

  //let the user know what length they have selected
  alert("Your password will be " + passwordLength + " characters");

    //confirm if user wants to include lower case letters
    confirmLowerCase = confirm("Would you like to include LOWER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmLowerCase) {
      alert("You have chosen to include LOWER CASE LETTERS.");
    }
    else {
      alert("You have chosen not to include LOWER CASE LETTERS.");
    }
    //confirm if user wants to include upper case letters
    confirmUpperCase = confirm("Would you like to include UPPER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmUpperCase) {
      alert("You have chosen to include UPPER CASE LETTERS");
    }
    else {
      alert("You have chosen not to include UPPER CASE LETTERS");
    }
    //confirm if user wants to include numbers
    confirmNumbers = confirm("Would you like to include NUMBERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmNumbers) {
      alert("You have chosen to include NUMBERS");
    }
    else {
      alert("You have chosen not to include NUMBERS");
    }
    //confirm if user wants to include special Characters
    confirmSpecialChar = confirm("Would you like to include SPECIAL CHARACTERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmSpecialChar) {
      alert("You have chosen to include special SPECIAL CHARACTERS");
    }
    else {
      alert("You have chosen not to include special SPECIAL CHARACTERS");
    }

  //Loop that will run through configuration options until they choose at least 1 parameter
  while (confirmLowerCase == false && confirmUpperCase == false && confirmNumbers == false && confirmSpecialChar == false) {
   //Alert user that they must pick at least 1 parameter
    alert("Please select 1 ore more password parameters, it is recommended to include all for security.")
    //confirm if user wants to include lower case letters
    confirmLowerCase = confirm("Would you like to include LOWER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmLowerCase) {
      alert("You have chosen to include LOWER CASE LETTERS.");
    }
    else {
      alert("You have chosen not to include LOWER CASE LETTERS.");
    }
    //confirm if user wants to include upper case letters
    confirmUpperCase = confirm("Would you like to include UPPER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmUpperCase) {
      alert("You have chosen to include UPPER CASE LETTERS");
    }
    else {
      alert("You have chosen not to include UPPER CASE LETTERS");
    }
    //confirm if user wants to include numbers
    confirmNumbers = confirm("Would you like to include NUMBERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmNumbers) {
      alert("You have chosen to include special NUMBERS");
    }
    else {
      alert("You have chosen not to include special NUMBERS");
    }
    //confirm if user wants to include special Characters
    confirmSpecialChar = confirm("Would you like to include SPECIAL CHARACTERS in your password? (Click okay to include or cancel to skip)");
    //let the user know if they inluded this criteria
    if (confirmSpecialChar) {
      alert("You have chosen to include special SPECIAL CHARACTERS");
    }
    else {
      alert("You have chosen not to include special SPECIAL CHARACTERS");
    }
  }
  
  // Generate new array based on criteria user selects... add together contents of each char array and and send the total to a new variable passwordString
  //if user selects lowercase, then concat the associated array to the password string array
  if(confirmLowerCase) {
    passwordString = passwordString.concat(lowerCase);
  }
  //if user selects uppercase, then concat the associated array to the password string array
  if (confirmUpperCase) {
    passwordString = passwordString.concat(upperCase);
  }
  //if user selects numbers, then concat the associated array to the password string array
  if (confirmNumbers) {
    passwordString = passwordString.concat(numbers);
  }
  //if user selects special characters, then concat the associated array to the password string array
  if (confirmSpecialChar) {
    passwordString = passwordString.concat(specialChar);
  }

  //for loop to pull a random character from the new concatinated array. Will run loop for the length of the new array
  for (let i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword + passwordString[Math.floor(Math.random() * passwordString.length)];
  }
  // return password to textarea
  return finalPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Get reference to the #copy element
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Copy password from text body
async function copyPassword() {
  let text = document.querySelector("#password").value;
  await navigator.clipboard.writeText(text);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click",copyPassword);
















