const inquirer = require('inquirer');
const fs = require('fs');

// const generateREADME = (responses) => 
// `
// # ${responses.title}

// # ${responses.sections[0]} 

// # ${responses.sections[1]} 

// # ${responses.sections[2]} 

// # ${responses.sections[3]} 

// # ${responses.sections[4]} 

// # ${responses.sections[5]} 

// # ${responses.sections[6]}

// `
const generateREADME = (responses) =>
`# ${responses.title}

## ${responses.sections[0]} 

* ${responses.TableofContents[0]}

* ${responses.TableofContents[1]}

* ${responses.TableofContents[2]}

* ${responses.TableofContents[3]}

* ${responses.TableofContents[4]}

* ${responses.TableofContents[5]}

## ${responses.sections[1]} 

${responses.installation}
    
## ${responses.sections[2]} 

${responses.description}
    
## ${responses.sections[3]}

${responses.usage}

## ${responses.sections[4]}

${responses.contributions}

## ${responses.sections[5]} 

${responses.licensure}

## ${responses.sections[6]}

${responses.testYesNo}
`

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
            choices: ['Table of Contents', 'Installation', 'Description', 'Usage', 'Contributions', 'Licensure', 'Test'],
        },
        {// table of contents - might not need - need to be turned into links
            type: 'checkbox',
            name: 'TableofContents',
            message: 'Which of the following should be in your Table of Contents?',
            choices: ['Installation', 'Description', 'Usage', 'License', 'Contributions', 'Test']
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
            choices: ['Yes', 'No'],
        },
    ]) // Inquirer
    .then((responses) => {
        
        // const stringResponses = JSON.stringify(responses)
        const README = generateREADME(responses);
        fs.writeFile("README.md", README, (err) =>
            err ? console.error(err) : console.log("MD Created")
        );


    }) // Then