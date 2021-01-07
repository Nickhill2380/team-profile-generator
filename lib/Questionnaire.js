const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const inquirer = require('inquirer');
const FileGenerator = require('./FileGenerator');


function Questionnaire () {
    this.team = [];
    this.employee;    
}

Questionnaire.prototype.employeeInfo = function () {
        inquirer
         .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your manager's office number?"
            }
            
         ])
         .then(({name, id, email, officeNumber}) => {
            this.employee = new Manager(name, id, email, officeNumber);
            this.team.push(this.employee);
            this.teamBuilder();
            return this.team;
        })   

};


Questionnaire.prototype.teamBuilder = function () {
       
       inquirer
        .prompt (
            {
            type: "list",
            name: "choice",
            message: "Would you like to add an enginner or intern or finish building your team?",
            choices: ["Engineer", "Intern", "Finish Building Team"]
             })
            .then(({choice}) => {
            if(choice === "Engineer"){              
                inquirer
                .prompt ([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the engineer's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the engineer's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the engineer's email"
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is your engineer's Github?"
                    }
                ])
                    .then(({name, id, email, github}) => {
                        this.employee = new Engineer(name, id, email, github);
                        this.team.push(this.employee);
                        this.teamBuilder();
                    })
            }
                
            else if(choice === "Intern") {
                inquirer
                .prompt ([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the intern's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the intern's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the intern's email"
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What is your intern's school?"
                    }
                ])
                .then(({name, id, email, school}) => {
                    this.employee = new Intern(name, id, email, school);
                    this.team.push(this.employee);
                    this.teamBuilder();
                })
            } else {
                
                return new FileGenerator().writeToFile(this.team); 
                
            }
        })       
}





module.exports = Questionnaire;