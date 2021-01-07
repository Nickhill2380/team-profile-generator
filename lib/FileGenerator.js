const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const fs = require('fs');

function FileGenerator () {

}

FileGenerator.prototype.generateHTML = function (team) {
    
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
            <h1 style="background-color:lightgreen; text-align: center;"> My Team <h1>
        </header>

        <main class = "col-12 col-lg-9 d-flex flex-column">
            <div class= "card container">
            <div class="m-5 row justify-content-around">
            
        ${this.cardGenerator(team)}
        </div>
        </div>
        </main>
    </body>
    </html>
    `;
}

FileGenerator.prototype.cardGenerator = function (team) {
    console.log(team)
    
    let staff = "";
   for( i= 0; i < team.length; i++) {
        
        staff += `
                    
                    <div class="col-12 col-md-6 col-xl-3 mb-3">
                    <div class="card">
                    <h2 style="background-color:lightblue">
                    ${team[i].name}
                    <p>
                    ${team[i].role}
                    </p>
                    </h2>
                    <p>
                    ID:${team[i].id}
                    </p>
                    <p>
                    Email: <a href="mailto:${team[i].email}">${team[i].email}</a>
                    </p>
                    <p>
                    ${this.specialInfo(team[i])}
                    </p>
                    </div>
                    </div>
                    `;
   }
   return staff;
}

FileGenerator.prototype.specialInfo = function (employee) {

    if(employee.role === 'Manager') {
        return `Office number: ${employee.officeNumber}`
    } else if(employee.role === 'Engineer') {
        return `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`
    } else {
        return `School: ${employee.school}`
    }

}



FileGenerator.prototype.writeToFile = function (team) {
    fs.writeFile("./dist/index.html", this.generateHTML(team), err => {
        if (err) throw err;
        
        console.log("HTML complete")
    })
}

module.exports = FileGenerator