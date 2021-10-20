const Intern = require("../lib/Intern");

test("Can set school" , () => {
    const testVar = "SMU";
    const user = new Intern("John Smith" , 1, "test@gmail.com", testVar);
    expect(user.school).toBe(testVar);
});

test("Can get role" , () => {
    const testVar = "Intern";
    const user = new Intern("John Smith" , 1, "test@gmail.com", "SMU");
    expect(user.getRole()).toBe(testVar);
});

test("Can get school" , () => {
    const testVar = "SMU";
    const user = new Intern("John Smith" , 1, "test@gmail.com", testVar);
    expect(user.getSchool()).toBe(testVar);
});

