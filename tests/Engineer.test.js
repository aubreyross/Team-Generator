const Engineer = require("../lib/Engineer");

test("Can set GitHub account" , () => {
    const GitHub = "GitHubUser";
    const engineer = new Engineer("Ben Wyatt" , 1, "test@gmail.com", testValue);
    expect(engineer.github).toBe(GitHub);
});

test("Can return role of employee" , () => {
    const role = "Engineer";
    const engineer = new Engineer("Ben Wyatt" , 1, "test@gmail.com", "GitHubUser");
    expect(engineer.getRole()).toBe(role);
});

test("Can return GitHub username" , () => {
    const GitHub = "GitHubUser";
    const engineer = new Engineer("Ben Wyatt" , 1, "test@gmail.com", "testValue");
    expect(engineer.getGithub()).toBe(GitHub);
});

