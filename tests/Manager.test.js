const Manager = require("../lib/Manager");

test("Can set office number" , () => {
    const testValue = 411;
    const manager = new Manager("Leslie Knope" , 1, "test@gmail.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
});

test("Can return role of employee" , () => {
    const testValue = "Manager";
    const manager = new Manager("Leslie Knope" , 1, "test@gmail.com", 411);
    expect(manager.getRole()).toBe(testValue);
});

test("Can return office number" , () => {
    const testValue = 411;
    const manager = new Manager("Leslie Knope" , 1, "test@gmail.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
});