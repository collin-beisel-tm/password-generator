// Assignment code here
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
  //Reset all input variables to empty so the application can be run as expected multiple times without refreshing the browser to clear variables
confirmLowerCase = "";
comfirmUpperCase = "";
confirmNumbers = "";
confirmSpecialChar = "";
passwordLength = "";
passwordString = [""];
finalPassword = "";

  //when user clicks generate password, ask them what the length should be 8-128 and validate their input
  passwordLength = prompt("Please input the desired length of your password from 8 to 128 characters.");
  //if user selects cancel on window prompt, the application will stop. They can start again by clicking generate password.
  if (passwordLength === null) {
    return;
  }
 

  //Loop that will run through the confirm length prompt until correct length range is chosen and the user has entered a valid number
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("You must choose a length between 8-128. This field only accepts numbers.")
    passwordLength = prompt("Please input the desired length of your password from 8 to 128 characters.");
    //if user selects cancel on window prompt, the application will stop. They can start again by clicking generate password.
    if (passwordLength === null) {
      return;
    }
  }

  //print the chosen password length to console to check if it worked
  console.log("Your password will be " + passwordLength + " characters");

    //confirm if user wants to include lower case letters
    confirmLowerCase = confirm("Would you like to include LOWER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    if (confirmLowerCase) {
      console.log("You have chosen to include LOWER CASE LETTERS.");
    }
    else {
      console.log("You have chosen not to include LOWER CASE LETTERS.");
    }
    //confirm if user wants to include upper case letters
    confirmUpperCase = confirm("Would you like to include UPPER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    if (confirmUpperCase) {
      console.log("You have chosen to include UPPER CASE LETTERS");
    }
    else {
      console.log("You have chosen not to include UPPER CASE LETTERS");
    }
    //confirm if user wants to include numbers
    confirmNumbers = confirm("Would you like to include NUMBERS in your password? (Click okay to include or cancel to skip)");
    if (confirmNumbers) {
      console.log("You have chosen to include NUMBERS");
    }
    else {
      console.log("You have chosen not to include NUMBERS");
    }
    //confirm if user wants to include special Characters
    confirmSpecialChar = confirm("Would you like to include SPECIAL CHARACTERS in your password? (Click okay to include or cancel to skip)");
    if (confirmSpecialChar) {
      console.log("You have chosen to include special SPECIAL CHARACTERS");
    }
    else {
      console.log("You have chosen not to include special SPECIAL CHARACTERS");
    }

  //Loop that will run through configuration options until they choose at least 1 parameter
  while (confirmLowerCase == false && confirmUpperCase == false && confirmNumbers == false && confirmSpecialChar == false) {
   //Alert user that they must pick at least 1 parameter
    alert("Please select 1 ore more password parameters, it is recommended to include all for security.")
    //confirm if user wants to include lower case letters
    confirmLowerCase = confirm("Would you like to include LOWER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    if (confirmLowerCase) {
      console.log("You have chosen to include LOWER CASE LETTERS.");
    }
    else {
      console.log("You have chosen not to include LOWER CASE LETTERS.");
    }
    //confirm if user wants to include upper case letters
    confirmUpperCase = confirm("Would you like to include UPPER CASE LETTERS in your password? (Click okay to include or cancel to skip)");
    if (confirmUpperCase) {
      console.log("You have chosen to include UPPER CASE LETTERS");
    }
    else {
      console.log("You have chosen not to include UPPER CASE LETTERS");
    }
    //confirm if user wants to include numbers
    confirmNumbers = confirm("Would you like to include NUMBERS in your password? (Click okay to include or cancel to skip)");
    if (confirmNumbers) {
      console.log("You have chosen to include special NUMBERS");
    }
    else {
      console.log("You have chosen not to include special NUMBERS");
    }
    //confirm if user wants to include special Characters
    confirmSpecialChar = confirm("Would you like to include SPECIAL CHARACTERS in your password? (Click okay to include or cancel to skip)");
    if (confirmSpecialChar) {
      console.log("You have chosen to include special SPECIAL CHARACTERS");
    }
    else {
      console.log("You have chosen not to include special SPECIAL CHARACTERS");
    }
  }
  
  // Generate new array based on criteria user selects... add together contents of each char array and and send the total to a new variable passwordString
  if(confirmLowerCase) {
    passwordString = passwordString.concat(lowerCase);
  }
  if (confirmUpperCase) {
    passwordString = passwordString.concat(upperCase);
  }
  if (confirmNumbers) {
    passwordString = passwordString.concat(numbers);
  }
  if (confirmSpecialChar) {
    passwordString = passwordString.concat(specialChar);
  }
  console.log(passwordString);

  //loop to pull a random character from the new concatinated array. Will run loop for the length of the new array
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
















