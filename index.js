const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./util/generate-site');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const getMgrData = () => {
    return inquirer
        .prompt([
        {
            type: 'text',
            name: 'mgrName',
            message: 'Please enter your name:'
        },
        {
            type: 'text',
            name: 'mgrId',
            message: 'Please enter your employee id:'
        },
        {
            type: 'text',
            name: 'mgrEmail',
            message: 'Please enter your email:'
        },
        {
            type: 'text',
            name: 'mgrOfficeNum',
            message: 'Please enter your office number:'
        }
    ])
    .then( data => {
        let teamMgr = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.mgrOfficeNum);
        return teamMgr;
    })
};

const getEmpData = empData => {
    if(!empData.employees) {
        empData.employees = [];
    }
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an option:',
                choices: ['Add Engineer', 'Add Intern', 'Finish'],
                default: 'Finish'
            },
            {
                type: 'text',
                name: 'empName',
                message: 'Please enter employee name:',
                when: ({ action }) => action.includes('Finish') === false
            },
            {
                type: 'text',
                name: 'empId',
                message: 'Please enter employee id:',
                when: ({ action }) => action.includes('Finish') === false
            },
            {
                type: 'text',
                name: 'empEmail',
                message: 'Please enter employee email:',
                when: ({ action }) => action.includes('Finish') === false
            },
            {
                type: 'text',
                name: 'username',
                message: 'Please enter GitHub username:',
                when: ({ action }) => action.includes('Add Engineer') === true,
            },
            {
                type: 'text',
                name: 'school',
                message: 'Please enter school name:',
                when: ({ action }) => action.includes('Add Intern') === true
            }
        ])
        .then(data => {
            if (data.action === 'Add Engineer') {
                let emp = new Engineer(data.empName, data.empId, data.empEmail, data.username);

                empData.employees.push(emp);
                // console.log(empData);

                return getEmpData(empData);

            } else if (data.action === 'Add Intern') {
                let emp = new Intern(data.empName, data.empId, data.empEmail, data.school);

                empData.employees.push(emp);
                // console.log(empData);

                return getEmpData(empData);

            } else {
                //console.log(empData);
                return empData;
            }
        });
};

getMgrData()
    .then(getEmpData)
    .then(empDir => {
        //console.log(empDir)
        return generatePage(empDir)
    })
    .then(pageHTML => {
        console.log(pageHTML);
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });