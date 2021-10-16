const = require("./Employee");
const Employee = require("./Employee.1");

class Manager extends Employee{
    constructor(fullName, id, email, officeNumber) {
        super(fullName, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;
