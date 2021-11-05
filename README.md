# Collin Beisel's Password Generator

## App description
- This application is used to generate a strong password with a length of 8-128 characters using lowercase, uppercase, numbers and special characters.

![Image of the app landing page](https://github.com/collin-beisel-tm/password-generator/blob/main/Develop/Images/pwd-gen-hp.PNG)
![Image of the password length prompt](https://github.com/collin-beisel-tm/password-generator/blob/main/Develop/Images/pwd-gen-length.PNG)

![Example image of password criteria prompt](https://github.com/collin-beisel-tm/password-generator/blob/main/Develop/Images/pwd-gen-char.PNG)

![Example image of completed password generation](https://github.com/collin-beisel-tm/password-generator/blob/main/Develop/Images/pwd-gen-complete.PNG)

## Technologies used
- HTML
- CSS
- JavaScript
- Git/GitHub

## Why did I build this project?
- I built this application as part of SMU's Full Stack Web Dev bootcamp. In this scenario our "emloyer" tasked us to create this password generator so that employees would have strong passwords.


## What did I learn?
- Building this application tought me how to research the many ways something can be accomplished in JS and pick the best one for my needs. I learned how to properly use arrays with concatination, how to use functions, and nested functions. I learned how to use while loops, and for loops to iterate requests or prompts. I learned how to use event listeners and query selectors to target HTML elements and user interaction.

## Features
- Header and greeting text
- text body where your password will be generated
- "generate password" button that will kick off the application to ask you a series of questions to build your password off 
- "copy to clipboard" button will copy the newly generated password to your clipboard so you can easily paste it in another application/password manager
- You can successfully run through this application as many times as you want without refreshing the page to generate multiple unique passwords.

## How to install this application
- No installation is required to use this web application. Simply navigate to the url in your favorite web browser (not compatible with Internet Explorer).

## How to use this application
- Navigate to https://collin-beisel-tm.github.io/password-generator/
- Click the "Generate Password" button to begin
- Follow the prompt to select password length
- Confirm your selections for the inclusion of lower case, upper case, numbers, and special characters
- Your new password will generate in the text box
- Click the "Copy to Clipboard" button to copy your new password so you can paste it into another application or password manager


## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acceptance Criteria
GIVEN I need a new, secure password
### Prompt
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
### Choose Criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
### Enter Length
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
### Choose Char Types
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
### Validate Selections
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
### Generate Password
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
### Display Password
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page