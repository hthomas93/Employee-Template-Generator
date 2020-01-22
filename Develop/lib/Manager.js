const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, role, officeNo) {
        super(name, id, email);
        this.officeNo = officeNo;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNo;
    }
}

module.exports = Manager;