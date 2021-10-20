const Employee = require("../lib/Employee");

test ("creates new employee object" , () => {
    const user = new Employee();
    expect(typeof(user)).toBe("object");
});

test ("can set the fullName" , () => {
    const fullName = "Aubrey Ross";
    const user = new Employee(fullName);
    expect(user.fullName).toBe(fullName);
});

test("can set the id" , () => {
    const testVar = "411";
    const user = new Employee("John Smith" , testVar);
    expect(user.id).toBe(testVar);
});

test ("can set email" , () => {
    const testVar = "test@gmail.com";
    const user = new Employee("John Smith", 1, testVar);
    expect(user.email).toBe(testVar);
});

test ("can get fullName by getfullName function", () => {
   const testVar = "Aubrey Ross";
   const user = new Employee(testVar);
   expect(user.getFullName()).toBe(testVar);
});


test ("can get id by getId function" , () => {
    const testVar = 411;
    const user = new Employee("John Smith", testVar);
    expect(user.getId()).toBe(testVar);
});

test ("can get email by getEmail function" , () => {
    const testVar = "test@gmail.com";
    const user = new Employee("John Smith", 1, testVar);
    expect(user.getEmail()).toBe(testVar);
});

test ("get employee role by getRole function" , () => {
    const testVar = "Employee";
    const user = new Employee("Aubrey Ross", 1, "test@gmail.com");
    expect(user.getRole()).toBe(testVar);
});


