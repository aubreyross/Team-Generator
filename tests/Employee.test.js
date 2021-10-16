const Employee = require("../lib/Employee");

test ("creates new employee object" , () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test ("gets employee name" , () => {
    const fullName = "Ron Swanson";
    const employee = new Employee(fullName);
    expect(employee.name).toBe(fullName);
});

test ("gets employee ID" , () => {
    const id = 000;
    const employee = new Employee("Ron Swanson", id);
    expect(employee.id.toBe(id);
});

test ("gets employee email", () => {
    const email = "test@gmail.com";
    const employee = new Employee("Ron Swanson", 000, email);
    expect(employee.email).toBe(email);
});

