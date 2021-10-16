const generateHTML = require('./dist/generateHTML.js');

//classes for employees
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
;

//require 
const inquirer = require("inquirer");
const fs = require ("fs");

//empty array for employee profiles
const wageSlaves = [];


// prompt of questions for manager credentials
