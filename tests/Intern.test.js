const Intern = require("../lib/Intern");

test("Can set school" , () => {
    const school = "Pawnee Preparatory";
    const intern = new Intern("Andy Dwyer" , 3, "test@gmail.com", school);
    expect(intern.school).toBe(school);
});

test("Can return role of employee" , () => {
    const role = "Intern";
    const intern = new Intern("Andy Dwyer" , 3, "test@gmail.com", "Pawnee Preparatory");
    expect(intern.getRole()).toBe(role);
});

test("Can return school" , () => {
    const school = "Pawnee Preparatory";
    const intern = new Intern("Andy Dwyer" , 3, "test@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
});

