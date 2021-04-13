// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

const questions = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

questions.prompt([ 
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
        name: "tableOfContents",
        message: "Enter Table of Contents"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation steps?"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage"
    },
    {
        type: "input",
        name: "license",
        message: "What is the license?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "How do you test this project?"
    },
    {
        type: "input",
        name: "questions",
        message: "Do you have any questions?"
    },
  
    ]).then((data) => {
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
        // dataString = data.toString();
        console.log(data);

        // fs.writeFile(fileName.toUpperCase().split(' ').join('').md, data, function (error){
            // fs.writeFile("README.md", gMarkdown(data.toString()), function (error){
        fs.writeFile("README.md", generateMarkdown(data), function (err){
            if(err) {
                console.log(err)
            }
            console.log("Success! The README file was created!");
        });
    });


// function createREAME(fileName, data) {

//     fs.writeFile(fileName.toUpperCase().split(' ').join('').md, data, function (error){
//         if(err) {
//             console.log(err)
//         }
//         console.log("Success! The README file was created!");
//     });
// }  

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();



