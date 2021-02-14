// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// title, table of contents, description, installation instructions, usage info, contribution guidelines, test instructions, license

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {// title
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?'
        },
        {// sections
            type: '',
            name: '',
            message: '',
            choices: []
        },
        {// table of contents
            type: '',
            name: '',
            message: ''
        },
        {// description
            type: '',
            name: '',
            message: ''
        },
        {// installation instructions
            type: '',
            name: '',
            message: ''
        },
        {// usage info
            type: '',
            name: '',
            message: ''
        },
        {// contribution guidelines
            type: '',
            name: '',
            message: ''
        },
        {// test instructions
            type: '',
            name: '',
            message: ''
        },
        {// licensure
            type: '',
            name: '',
            message: '',
            choices: []
        },
        {//github
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {//email
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
    ]).then((responses) => {


        // Creates and fills in file
        fs.writeFile("README.md", (err) =>
            err ? console.log(err) : console.log("File Written"))
    })