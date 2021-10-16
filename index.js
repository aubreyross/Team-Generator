const generateHTML = require('./dist/generateHTML.js');

//classes for employees
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//require 
const inquirer = require("inquirer");
const fs = require ("fs");

//empty array for employee profiles
const wageSlaves = [];


// prompt of questions for manager credentials

// prompt of questions for manager credentials
const managerProfile = () => {
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
            
        },
    ])

    .then(managerCredentials) => {
        const {fullName, id, email, officeNumber } = managerCredentials;
        const manager = new Manager(fullName, id, email, officeNumber);

        wageSlaves.push(manager);

    })
});

// prompt of questions for employee credentials
const employeeProfile = () => {
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
            message: "Please enter employee's github username"
            
        },
        {
            type: "input",
            name: "school", 
            message: "Please enter intern's school name"
            
        },
    ])

    .then(employeeCredentials => {
        let {fullName, role, id, email, school, github} = employeeCredentials;
        let employee;

        if (role === "Intern") {
            employee = new Intern (id, email, github, fullName);

        } else if (role === "Engineer") {
            employee = new Engineer (id email, school, fullName);
        }

        wageSlaves.push(employee);
    }
};