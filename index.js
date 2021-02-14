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
            type: 'checkbox',
            name: 'sections',
            message: 'Which of the following do you want in your README?',
            choices: ['Table of Contents', 'Installation', 'Description', 'Usage', 'Contributions', 'Licensure', 'Test']
        },
        {// table of contents - might not need - need to be turned into links
            type: 'checkbox',
            name: 'table-of-contents',
            message: 'Which of the following should be in your Table of Contents?',
            choices: ['Table of Contents', 'Installation', 'Description', 'Usage', 'License', 'Contributions']
        },
        {// description
            type: 'input',
            name: 'description',
            message: 'Could you please describe your project in 1-2 sentences?'
        },
        {// installation instructions - need to turn into a list somehow
            type: 'input',
            name: 'installation',
            message: 'Please provide a step-by-step description on how to get the development environment running.'
        },
        {// usage info - need to link instructions and images
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions on how to use the application, along with the necessary screenshots.'
        },
        {// contribution guidelines - need to add links to Github URL as well
            type: 'input',
            name: 'contributions',
            message: 'Please list any collaborators (if any).'
        },
        {// licensure - need badge and explanation of use
            type: 'checkbox',
            name: 'licensure',
            message: 'Please choose a license.',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        {//github - need link
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {//email
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {// test instructions
            type: 'checkbox',
            name: 'testYesNo',
            message: 'Will this include tests for the applications?',
            choices: ['Yes', 'No']
        },
    ])
    // .then((responses) => {


    //     // Creates and fills in file
    //     fs.writeFile("README.md", (err) =>
    //         err ? console.log(err) : console.log("File Written"))
    // })