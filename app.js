const inquirer = require("inquirer");
const fs = require("fs");

let Employee = require("Develop/lib/Employee.js");
let Manager = require("Develop/lib/Manager.js");
let Intern = require("Develop/lib/Intern.js");
let Engineer = require("Develop/lib/Engineer.js");

// var main = require("Develop/templates/main.html");
// var engineerHTML = require("Develop/templates/engineer.html");
// var managerHTML = require("Develop/templates/manager.html");
// var internHTML = require("Develop/templates/intern.html");


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
            "Intern",
        ],
        name: "role"
    }, {
        type: "input",
        name: "school",
        message: "What school are you attending?",
        when: (response) => response.role === 'Intern'
    }, {
        type: "input",
        name: "github",
        message: "What is your github url?",
        when: (response) => response.role === 'Engineer'
    }, {
        type: "input",
        name: "officeNo",
        message: "What is your office number?",
        when: (response) => response.role === "Manager"
    }])
    .then(
        function (response) {

        })
