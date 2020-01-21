var inquirer = require("inquirer");

inquirer
    .prompt([{
        type: "input",
        message: "What is the employee's name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the employee's title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "list",
        message: "What is the employee's role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    }])
    .then(function (response) {

    })
