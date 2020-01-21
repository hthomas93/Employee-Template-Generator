const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
// Intern
// school
// getSchool()
// getRole() // Overridden to return 'Intern'