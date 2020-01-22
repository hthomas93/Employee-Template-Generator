const inquirer = require("inquirer");
const fs = require("fs");

let Employee = require("./lib/Employee.js");
let Manager = require("./lib/Manager.js");
let Intern = require("./lib/Intern.js");
let Engineer = require("./lib/Engineer.js");

let teamSize;
const team = [];

inquirer
    .prompt([{
        type: "input",
        message: "How big is your team?",
        name: "teamsize"
    }]).then(function (input) {
        teamsize = input.teamsize;
        console.log(input.teamsize);
        enterEmployeeData();
    })



function enterEmployeeData() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is the employee's name?",
            name: "name"
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
            when: (employee) => employee.role === 'Intern'
        }, {
            type: "input",
            name: "github",
            message: "What is your github url?",
            when: (employee) => employee.role === 'Engineer'
        }, {
            type: "input",
            name: "officeNo",
            message: "What is your office number?",
            when: (employee) => employee.role === "Manager"
        }])
        .then(
            function (employee) {
                if (employee.role === "Engineer") {
                    var newEngie = new Engineer(employee.name, employee.id, employee.email, employee.role, employee.github);
                    team.push(newEngie);
                    console.log("It's an engineer");
                    console.log(team)
                }

                if (employee.role === "Manager") {
                    var newManager = new Manager(employee.name, employee.id, employee.email, employee.role, employee.officeNo);
                    team.push(newManager);
                    console.log("It's a manager!");
                    console.log(team);
                }

                if (employee.role === "Intern") {
                    var newIntern = new Manager(employee.name, employee.id, employee.email, employee.role, employee.school);
                    team.push(newIntern);
                    console.log("It's another intern!");
                    console.log(team);
                }
                // If the response role is an engineer
                // Read the Engineer html template
                // Replace the Engineer name
                // Replace the Engineer title
                // Replace the Engineer id
                // Replace the Engineer email address
                // Replace the Engineer github username
                // If the response role is a manager
                // If the response role is an intern
                teamsize--;
                if (teamsize === 0) {
                    return;
                } else {
                    enterEmployeeData();
                }
            })

}

// function toHTMLEmployee(employee) {
//     if (employee.getRole() === "Engineer") {
//         var engieHTML = fs.readFileSync("./templates/engineer.html", "utf8");
//         engieHTML = engieHTML.replace(`{{employee-name}}`, newEngie.getName());
//         engieHTML = engieHTML.replace(`{{employee-id}}`, newEngie.getId());
//         engieHTML = engieHTML.replace(`{{employee-email}}`, newEngie.getEmail());
//         engieHTML = engieHTML.replace(`{{employee-github}}`, newEngie.getGithub());
//         return engieHTML;
//     }
// }

