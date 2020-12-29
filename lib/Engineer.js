const Employee = require("./Employee");
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, github) {
        super(name);

        this.github = github;
    }

    getGithub() {
        inquirer
            .prompt({
                type: "text",
                name: "github",
                message: "What is the enigneer's github?"
            })
            .then(({github}) => {
                this.engineer.github = github;
            })
    };

    getRole() {
        this.role = "Engineer";

        return this.role;
    }
}

module.exports = Engineer;