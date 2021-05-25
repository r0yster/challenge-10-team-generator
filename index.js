const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let empData = [];

const getMgrData = () => {
    inquirer
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
        empData.push(teamMgr);
        getEmpData();
    })
};

const getEmpData = () => {
    inquirer
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

                empData.push(emp);
                console.log(empData);

                getEmpData();

            } else if (data.action === 'Add Intern') {
                let emp = new Intern(data.empName, data.empId, data.empEmail, data.school);

                empData.push(emp);
                console.log(empData);

                getEmpData();

            } else {
                console.log(empData);
            }
        })
}

getMgrData();