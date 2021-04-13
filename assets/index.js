// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

const questions = require('inquirer');

const generateMarkdown = require("./assets/utils/generateMarkdown");

questions
.prompt([ 
{
    type: "input",
    name: "title",
    message: "What is the Project Title?"
},
{
    type: "input",
    name: "description",
    message: "Describe the task: "
},
{
    type: "input",
    name: "toc",
    message: "Enter Table of Contents"
},
{
    type: "input",
    name: "installation",
    message: "What is the directory structure"
},
{
    type: "input",
    name: "usage",
    message: "What are the installation steps?"
},

{
    type: "input",
    name: "contribute",
    message: "Enter usage"
},

{
    type: "input",
    name: "github",
    message: "What is the license?"
},
{
    type: "input",
    name: "github",
    message: "Who contributed to this project?"
},
{
    type: "input",
    name: "github",
    message: "How do you test this project?"
},
{
    type: "input",
    name: "github",
    message: "Do you have any questions?"
},
]
.then((data) => {
// response.confirm === response.password
//   ? console.log('Success!')
//   : console.log('You forgot your password already?!')
});


function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, function (error){
    console.log("Success!");
   });
}  

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



