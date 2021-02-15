// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions - DONE

// WHEN I enter my project title
// THEN this is displayed as the title of the README - DONE

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests - DONE

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under - NEED BADGE AND EXPLANATION

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile - NEED LINK

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions - NEED INSTRUCTIONS

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README - DONE

const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (responses) =>
`# ${responses.title}

## ${responses.sections[0]} 

* [${responses.TableofContents[0]}](#${responses.sections[1]})

* [${responses.TableofContents[1]}](#${responses.sections[2]})

* [${responses.TableofContents[2]}](#${responses.sections[3]})

* [${responses.TableofContents[3]}](#${responses.sections[4]})

* [${responses.TableofContents[4]}](#${responses.sections[5]})

* [${responses.TableofContents[5]}](#${responses.sections[6]})

* [${responses.TableofContents[6]}](#${responses.sections[7]})


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

* Github: [${responses.github}](https://github.com/${responses.github})
* Email: ${responses.email}

Feel free to contact me via email with any questions.

## ${responses.sections[7]}

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
            choices: ['Table of Contents', 'Installation', 'Description', 'Usage', 'Contributions', 'Licensure', 'Questions', 'Test'],
        },
        {// table of contents - might not need - need to be turned into links
            type: 'checkbox',
            name: 'TableofContents',
            message: 'Which of the following should be in your Table of Contents?',
            choices: ['Installation', 'Description', 'Usage', 'License', 'Contributions', 'Questions', 'Test']
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
            message: 'What is your Github username (no @ needed)?'
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
        
        const README = generateREADME(responses);
        fs.writeFile("README.md", README, (err) =>
            err ? console.error(err) : console.log("MD Created")
        );

    }) // Then