// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

const questions = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//   //Add in license badge here!!

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
        message: "Enter: Table of Contents"
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
        type: "list",
        message: "Which license was used for this project?",
        name: "license",
        choices: [
            "Apache License, Version 2.0",
            "BSD-3-Clause",
            "MIT License",
            "Mozilla Public License 2.0 (MPL-2.0)"
        ]
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
    {
        type: "input",
        name: "username",
        message: "What is your GiHub username?"
    },    
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },  
    {
        type: "input",
        name: "copyrightYear",
        message: "What is the copyright year?"
    },  
    {
        type: "input",
        name: "author",
        message: "Who is the author?"
    }
    ]).then((data) => {
        console.log(data);

        //source: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
        let author = `${data.author}`;
        //split author's first and last names into an array of words to
        //manipulate each word individually. 
        author = author.split(" ");

        //iterate over each word
        for(let i=0; i < author.length; i++) {
            author[i] = author[i][0].toUpperCase() + author[i].substr(1);
        }

        //join the words
        author = author.join(' '); //.replace(/,/g, ' ');
    
        // author = author[0].toUpperCase() + author.substring(1);
        console.log("Author is: " + author);


        // fs.writeFile(fileName.toUpperCase().split(' ').join('').md, data, function (error){
            // fs.writeFile("README.md", gMarkdown(data.toString()), function (error){
        fs.writeFile(`(${data.title}).md`, generateMarkdown(data,author), function (err){
            if(err) {
                console.log(err)
            }
            console.log("Success! The README file was created!");
        });
    });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();



