import inquirer from "inquirer";
import fs from"fs";
  import path from'path';
//   import generateMarkdown from  "./utils/generateMarkdown";


  
  // array of questions for user
  const questions = [
     
     { message: "What is the name of the project?",
       name: 'project',
    },
      
  
    
      {message: "Please provide a table on content",
      name: 'content',
    },
      
  
   
      {message: "What is the name of the user?",
      name: 'user',
    
    },
      
   
      {message: "Please provide a description of the project",
      name: 'description',
    },
      
  
    
      {message: "What is the installation process?",
      name: 'installation',
    },
      
    
      {message: "How will this project be used?",
      name: 'usage',
    },
     
   
      {message: "What licenses are required with this project?",
      name: 'typeOfLicense',
    },
      
    
      {message: "Who were the contributors to this project?",
      name: 'contributors',
    },
      
    
      {message: "What is the test process for this project?",
      name: 'tests',
    },
      
   
      {message: "What is the user github email address?",
      name: 'email',
    },
      
  
    
      {message: "Please provide a profile url or link",
      name: 'url',
    },
      
  
  
  
   ]
  
  // function to write README file
  function writeToFile(fileName, data) {
    let fileContent =`# ${data.project} 

    # ${data.content}
     
    #${data.user}

    # ${data.description} `;
    fs.writeFile(fileName, fileContent, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          
        }
      });
  
  }
  


  
  // function call to initialize program
      async function init() {
        inquirer.prompt(questions)
      .then((inquirerResponse) => {   
          console.log("Making ReadMe");
          console.log(inquirerResponse);
        writeToFile("README.md",inquirerResponse);
      })
      .catch((err) => {
          console.log(err);
      })
       
      }   
     
//   }
  
  init();
  
//   const userName = questions
  
//   axios.get(`https://api.github.com/users/${userName}`)
//   .then(questions => {
//     console.log(questions.data);
//   });
  