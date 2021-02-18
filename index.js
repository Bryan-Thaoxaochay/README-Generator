const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (responses) =>
`
# ${responses.title}

## ${responses.sections[0]} 

* [${responses.sections[1]}](#${responses.sections[1]})

* [${responses.sections[2]}](#${responses.sections[2]})

* [${responses.sections[3]}](#${responses.sections[3]})

* [${responses.sections[4]}](#${responses.sections[4]})

* [${responses.sections[5]}](#${responses.sections[5]})

* [${responses.sections[6]}](#${responses.sections[6]})

* [${responses.sections[7]}](#${responses.sections[7]})


## ${responses.sections[1]} 

${responses.installation}
    
## ${responses.sections[2]} 

${responses.description}
    
## ${responses.sections[3]}

${responses.usage}

## ${responses.sections[4]}

${responses.contributions}

## ${responses.sections[5]} 

${licensure}

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
        {// description
            type: 'input',
            name: 'description',
            message: 'Could you please describe your project in 1-2 sentences?'
        },
        {// installation instructions - need to turn into a list somehow
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions on how to get the development environment running.'
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
            choices: [
                'GNU AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)[Explanation](https://choosealicense.com/licenses/agpl-3.0/)', 

                'GNU GPLv3 [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)[Explanation](https://choosealicense.com/licenses/gpl-3.0/)', 

                'GNU LGPLv3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)[Explanation](https://choosealicense.com/licenses/lgpl-3.0/)', 

                'Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)[Explanation](https://choosealicense.com/licenses/mpl-2.0/)', 

                'Apache License 2.0 ![Hex.pm](https://img.shields.io/hexpm/l/plug)[Explanation](https://choosealicense.com/licenses/apache-2.0/)', 

                'MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)[Explanation](https://choosealicense.com/licenses/mit/)', 

                'Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)[Explanation](https://choosealicense.com/licenses/bsl-1.0/)', 

                'The Unlicense [Explanation](https://choosealicense.com/licenses/unlicense/)'
            ]
        },
        {//github
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
            type: 'input',
            name: 'testYesNo',
            message: 'Please include any tests with instructions. If there is not any, leave blank.',
        },
    ]) // Inquirer
    .then((responses) => {

        let licensure = responses.licensure
        if (licensure = responses.licensure[0]) {
            licensure += 'GNU AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)] \n \n(http://www.gnu.org/licenses/agpl-3.0)[Explanation](https://choosealicense.com/licenses/agpl-3.0/)'
        }

        const README = generateREADME(responses);

        fs.writeFile("README.md", README, (err) =>
            err ? console.error(err) : console.log("MD Created")
        );

    }) // Then