const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;