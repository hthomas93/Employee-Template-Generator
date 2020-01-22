const inquirer = require("inquirer");
const fs = require("fs");

let Employee = require("./lib/Employee.js");
let Manager = require("./lib/Manager.js");
let Intern = require("./lib/Intern.js");
let Engineer = require("./lib/Engineer.js");

const team = [];
let cards;
let main = fs.readFileSync('./templates/main.html', 'utf8');

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
                    cards += toHTMLEmployee(newEngie);
                }

                if (employee.role === "Manager") {
                    var newManager = new Manager(employee.name, employee.id, employee.email, employee.role, employee.officeNo);
                    team.push(newManager);
                    console.log("It's a manager!");
                    console.log(team);
                    cards += toHTMLEmployee(newManager);

                }

                if (employee.role === "Intern") {
                    var newIntern = new Manager(employee.name, employee.id, employee.email, employee.role, employee.school);
                    team.push(newIntern);
                    console.log("It's another intern!");
                    console.log(team);
                    cards += toHTMLEmployee(newIntern);
                }
                teamsize--;
                if (teamsize === 0) {
                    // Render the team as cards in the main html
                    main = main.replace('{{cards}}', cards);
                    fs.writeFileSync('./output/team.html', main);
                    return;
                } else {
                    enterEmployeeData();
                }
            })

}

function toHTMLEmployee(employee) {
    if (employee.getRole() === "Engineer") {
        var engieHTML = fs.readFileSync("./templates/engineer.html", "utf8");
        engieHTML = engieHTML.replace(`{{employee-name}}`, employee.getName());
        engieHTML = engieHTML.replace(`{{employee-id}}`, employee.getId());
        engieHTML = engieHTML.replace(`{{employee-email}}`, employee.getEmail());
        engieHTML = engieHTML.replace(`{{employee-github}}`, employee.getGithub());
        return engieHTML;
    }
    else if (employee.getRole() === "Manager") {
        var managerHTML = fs.readFileSync("./templates/engineer.html", "utf8");
        managerHTML = managerHTML.replace(`{{employee-name}}`, employee.getName());
        managerHTML = managerHTML.replace(`{{employee-id}}`, employee.getId());
        managerHTML = managerHTML.replace(`{{employee-email}}`, employee.getEmail());
        managerHTML = managerHTML.replace(`{{employee-office-no}}`, employee.getOfficeNumber());
        return managerHTML;
    }
    else if (employee.getRole() === "Intern") {
        var internHTML = fs.readFileSync("./templates/engineer.html", "utf8");
        internHTML = internHTML.replace(`{{employee-name}}`, employee.getName());
        internHTML = internHTML.replace(`{{employee-id}}`, employee.getId());
        internHTML = internHTML.replace(`{{employee-email}}`, employee.getEmail());
        internHTML = internHTML.replace(`{{employee-school}}`, employee.getSchool());
        return internHTML;
    }
}

