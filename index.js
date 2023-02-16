const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
   
    message, "What is the name of the project?",
    

  
    message, "Please provide a table on content",
    

 
    message, "What is the name of the user?",
    
 
    message, "Please provide a description of the project",
    

  
    message, "What is the installation process?",
    
  
    message, "How will this project be used?",
   
 
    message, "What licenses are required with this project?",
    
  
    message, "Who were the contributors to this project?",
    
  
    message, "What is the test process for this project?",
    
 
    message, "What is the user github email address?",
    

  
    message, "Please provide a profile picture",
    



 ]

// function to write README file
function writeToFile(fileName, data) {
    var writeToFile = new writeToFile("./README.md");
writeToFile.open() ; 
writeToFile.writeLine("Another line") ; 
writeToFile.close() ;

}

// function to initialize program
function init() {

}

// function call to initialize program
init(); {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
    
}

init();

const userName = questions

axios.get(`https://api.github.com/users/${userName}`)
.then(questions => {
  console.log(questions.data);
});
