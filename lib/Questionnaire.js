const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const inquirer = require('inquirer');


function Questionnaire () {
    this.team = [];
    this.employee;    
}

Questionnaire.prototype.teamBuilder = function () {
       
       inquirer 
        .prompt ({
            type: "list",
            name: "choice",
            message: "Would you like to add an enginner or intern or finish building your team?",
            choices: ["Engineer", "Intern", "Finish Building Team"]
        })
        .then(({choice}) => {
            if(choice === "Engineer"){
                new Employee().getName();
                this.teamEnigneer();
            }else if(choice === "Intern") {
                new Employee().getName();
                this.teamIntern();
            } else {
               console.log(this.team);
            }
        })

        
}

module.exports = Questionnaire;