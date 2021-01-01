const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const inquirer = require('inquirer');
const fs = require('fs');


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
        //  .then(data =>
        //     {
        //         return this.generateHTML(data);
        //     })
        //  .then(htmlData => {
        //      return this.writeToFile("./dist/index.html", htmlData)
        //  })

        

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
                
                return this.writeToFile(this.team); 
                
            }
        })       
}

Questionnaire.prototype.generateHTML = function (team) {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="./stylesheet.css" />
        <title>Team Builder</title>
    </head>
    <body>
        <header>
            <h1> Project Team <h1>
        </header>

        <main class = "row flex-row justify-space-between">
            <div class= "col-lg-4 col-sm-12">
        ${this.cardGenerator(team)}
    </body>
    </html>
    `;
}

Questionnaire.prototype.cardGenerator = function (team) {
    console.log(team)
    
    let staff = "";
   for( i= 0; i < team.length; i++) {
        
        staff += `
                    <div class="card">
                    <h2>
                    ${team[i].name}
                    </h2>
                    <h2>
                    ${team[i].role}
                    </h2>
                    <p>
                    ID:${team[i].id}
                    Email: <a href="mailto:${team[i].email}">${team[i].email}</a>
                    ${this.specialInfo(team[i])}

                    </p>
                    </div>`;
   }
   return staff;
}

Questionnaire.prototype.specialInfo = function (employee) {

    if(employee.role === 'Manager') {
        return `Office number: ${employee.officeNumber}`
    } else if(employee.role === 'Engineer') {
        return `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`
    } else {
        return `School: ${employee.school}`
    }

}



Questionnaire.prototype.writeToFile = function () {
    fs.writeFile("./dist/index.html", this.generateHTML(this.team), err => {
        if (err) throw err;
        
        console.log("HTML complete")
    })
}



module.exports = Questionnaire;