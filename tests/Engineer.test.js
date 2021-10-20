const Engineer = require("../lib/Engineer");

test("Can set GitHub account" , () => {
    const testVar = "GitHubAcct";
    const user = new Engineer("John Smith", 1, "test@gmail.com", testVar);
    expect(user.github).toBe(testVar);
});

test("Can return role of employee" , () => {
    const testVar = "Engineer";
    const user = new Engineer("John Smith", 1, "test@gmail.com", "GitHubAcct");
    expect(user.getRole()).toBe(testVar);
});

test("Can return GitHub username" , () => {
    const testVar = "GitHubAcct";
    const user = new Engineer("John Smith", 1, "test@gmail.com", testVar);
    expect(user.getGithub()).toBe(testVar);
});

module.exports = Engineer;
