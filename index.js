const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const { type } = require('node:os');
const { rawListeners } = require('node:process');

// Build Inquirer questions

const start = () => {
    inquirer.prompt([
        {
            name: 'start',
            type: 'rawlist',
            message: 'What do you want to do?',
            choices: ['view all employees',
                'view all employees by role',
                'view all employees by department',
                'add employee',
                'add role',
                'add department',
                'update employee role',
                'update employee manager',
                'delete employee',
                'delete role',
                'delete department',
                'view department budget'
            ]
        }
    ])
        .then((answer) => {
            switch (answer.start) {
                case 'view all employees':
                    viewEmployees();
                    break;
                case 'view all employees by role':
                    employeesByRole();
                    break;
                case 'view all employees by department':
                    employeesByDept();
                    break;
                case 'add employee':
                    addEmployee();
                    break;
                case 'add role':
                    addRole();
                    break;
                case 'add department':
                    addDept();
                    break;
                default:
                    console.log(`Invalid action: ${answer.start}`);
                    break;
            }
        });
};

const start = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};

const viewEmployees = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};

const employeesByRole = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};
const employeesByDept = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};
const addEmployee = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};
const addRole = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};
const addDept = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};
const updateRole = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};
const updateManager = () => {
    inquirer.prompt([

    ])
        .then((answers) => {

        });
};
/*
const deleteEmployee = () => {
    inquirer.prompt([

    ])
    .then((answers) => {

    });
};
const deleteRole = () => {
    inquirer.prompt([

    ])
    .then((answers) => {

    });
};
const deleteDept = () => {
    inquirer.prompt([

    ])
    .then((answers) => {

    });
};
const deptBudget = () => {
    inquirer.prompt([

    ])
    .then((answers) => {

    });
};


view all employees
view all employees by role
view all employees by department
add employee
add role
add department
update employee role
update employee manager
delete employee
delete role
delete department
view department budget

*/
// build logic for JOINS based on responses
// figure out how to print to the console using console.table