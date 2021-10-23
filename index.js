const printHTML = require('./dist/printHTML');

//classes for employees that will be used in the js files of the lib folder.
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//inquirer and fs 
const inquirer = require("inquirer");
const fs = require("fs");

//empty array for employee profiles
const wageSlaves = [];


// prompt user to add a new manager profile with the following credentials
const managerProf = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "fullName",
            message: "Please enter manager name"

        },
        {
            type: "input",
            name: "id",
            message: "Please enter manager ID"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter manager email address"

        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter manager office number"
        }
    ])
        //upon user input new manager will be created
        .then(response => {
            const { fullName, id, email, officeNumber } = response;
            const manager = new Manager(fullName, id, email, officeNumber);
        // pushes manager profile to the array
            wageSlaves.push(manager);
            console.log(manager);
        });

}
// the function to prompt the user to add another team memeber, either an engineer or intern.
const employeeProf = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please select employee role",
            choices: ["Engineer", "Intern"]

        },
        {
            type: "input",
            name: "fullName",
            message: "Please enter employee name"

        },
        {
            type: "input",
            name: "id",
            message: "Please enter employee ID"

        },
        {
            type: "input",
            name: "email",
            message: "Please enter employee's email address"

        },
        {
            type: "input",
            name: "github",
            message: "Please enter employee's github username",
            //used inquirers "when" method which receives user's response of role to determine if this question should be asked.
            when: (response) => response.role === "Engineer",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter intern's school name",
            when: (response) => response.role === "Intern",
        },
    ])
        //based on the user's input for role, it will determine which of the latter 2 questions should be asked.
        .then(response => {
            let { fullName, role, id, email, school, github, newEmployee } = response;
            let employee;
            //if user selected engineer it will prompt questions for this criteria
            if (role === "Engineer") {
                employee = new Engineer(id, email, school, fullName);
            //if user selected intern it will prompt  questions for this criteria
            } else if (role === "Intern") {
                employee = new Intern(id, email, github, fullName);
            }
            wageSlaves.push(employee);

        })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("success");
    }
})

};
managerProf()
    .then(employeeProf)
    .then(wageSlaves => {
        return printHTML(wageSlaves);
    })
    .then(html => {
        return writeFile(html);
    })
    .catch(err => {
        console.log(err);
    });