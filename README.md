# Collin Beisel's Password Generator

## App description
This application is used to generate a strong password with a length of 8-128 characters using lowercase, uppercase, numbers and special characters.

![Image of the app landing page](https://github.com/collin-beisel-tm/password-generator/blob/main/Develop/Images/pwd-gen-hp.PNG)
![Image of the My Work section](https://github.com/collin-beisel-tm/fullstack-portfolio/blob/main/assets/Images/readme-screenshot2.PNG
)

![Image of the footer section](https://github.com/collin-beisel-tm/fullstack-portfolio/blob/main/assets/Images/readme-screenshot3.PNG
)

## Technologies used
- HTML
- CSS (flexbox)
- Git/GitHub

## Why did I build this project?
I built this application so I could have a place to display my recent development work to potential employers/clients.


## What did I learn?
I learned how to use flexbox to style multiple flex containers with differing card sizes. I learned how to make my components responsive to browser size. These two things proved very challenging when dealing with many nested child elements in each flex container.

## Features
- Global nav with links to each site section
- Sections to tell clients/employers about me, my work, and how to reach me
- a grid of flexbox cards for my recent dev projects that are clickable and bring users to my published git pages

## How to install this application
- No installation is required to use this web application. Simply navigate to the url in your favorite web browser (not compatible with Internet Explorer)

## How to use this application
- Navigate to https://collin-beisel-tm.github.io/fullstack-portfolio/#get-to-know-me
- scroll down to learn about me or click the global nav button to reach your desired section
- Project cards in the 'My Work' section are clickable and will take you to the deployed application on GitHub pages. If the project is not yet complete the link will take you to my GitHub profile
- Click the email link in the 'Reach Out' section or fill out the form to get in touch with me
- Click the respective footer link to view my LinkedIn, Github, and Facebook profiles

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