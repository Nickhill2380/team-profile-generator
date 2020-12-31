const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github='') {
        super(name);

        this.github = github;
    }

    getGithub() {
      return `${github}`;
    };

    getRole() {
    return `Enigneer`;
    };
}

module.exports = Engineer;