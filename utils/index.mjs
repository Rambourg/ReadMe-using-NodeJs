import inquirer from 'inquirer';

inquirer
  .prompt([
    type, 'input',
      message, 'What is your user name?',
      name, 'username'
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot something?!')
  )])
