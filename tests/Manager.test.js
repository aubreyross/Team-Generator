const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number" , () => {
    const testVar = 411;
    const user= new Manager("John Smith" , 1, "test@gmail.com", testVar);
    expect(user.officeNumber).toBe(testVar);
});

test("Can get role" , () => {
    const testVar = "Manager";
    const user = new Manager("John Smith" , 1, "test@gmail.com", 411);
    expect(user.getRole()).toBe(testVar);
});

test("Can get office number" , () => {
    const testVar = 411;
    const user = new Manager("John Smith" , 1, "test@gmail.com", testVar);
    expect(user.getOfficeNumber()).toBe(testVar);
});

module.exports = Manager;