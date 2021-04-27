const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'WorldWideWebster3',
    database: 'employeesDB',
});

connection.connect((err) => {
    if (err) throw err;
    start();
});
// const { type } = require('node:os');
// const { rawListeners } = require('node:process');

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
                // case 'view all employees by department':
                //     employeesByDept();
                //     break;
                // case 'add employee':
                //     addEmployee();
                //     break;
                // case 'add role':
                //     addRole();
                //     break;
                // case 'add department':
                //     addDept();
                //     break;
                default:
                    console.log(`Invalid action: ${answer.start}`);
                    break;
            }
        });
};
// build logic for JOINS based on responses
const viewEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        console.table(res);
    });
    start();
};

const employeesByRole = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        inquirer.prompt(
            {
                name: 'select_role',
                type: 'rawlist',
                message: 'What role do you want to list employees by?',
                choices() {
                    const choiceArray = [];
                    res.forEach(({ title }) => {
                        choiceArray.push(title);
                    });
                    return choiceArray;
                },
            })
            .then((answer) => {
                console.log(answer);
                // take answer from prompt compare title to id in role table
                // return all employees with that employee.role_id
                const query = 'SELECT first_name, last_name, role_ id FROM employees JOIN role ON employees WHERE employee.role_id = role.id';
                connection.query(query, (err, res) => {
                    console.table(res);
                });
            });
    });
};

// const employeesByDept = () => {
//     inquirer.prompt([

//     ])
//         .then((answers) => {

//         });
// };
// const addEmployee = () => {
//     inquirer.prompt([

//     ])
//         .then((answers) => {

//         });
// };
// const addRole = () => {
//     inquirer.prompt([

//     ])
//         .then((answers) => {

//         });
// };
// const addDept = () => {
//     inquirer.prompt([

//     ])
//         .then((answers) => {

//         });
// };
// const updateRole = () => {
//     inquirer.prompt([

//     ])
//         .then((answers) => {

//         });
// };
// const updateManager = () => {
//     inquirer.prompt([

//     ])
//         .then((answers) => {

//         });
// };
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
*/


