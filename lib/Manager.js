const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role = 'Manager') {

        super(name, id, email);
        
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getRole() {
       return `${this.role}`;
    }
}

module.exports = Manager;