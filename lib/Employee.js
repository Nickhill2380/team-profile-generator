const inquirer = require('inquirer');

class Employee {
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

Employee.prototype.getName = function() {
    inquirer
        .prompt({
            type: "text",
            name: "name",
            message: "What is your name?"
        })
        .then (({name}) => {
            this.employee = new Employee(name);

            this.getId();
        });
};

Employee.prototype.getId = function() {
    inquirer
        .prompt({
            type: "text",
            name: "id",
            message: "What is the employee's id?"
        })
        .then(({id}) =>{
            this.employee.id = id;

            this.getEmail();
        });
};

Employee.prototype.getEmail = function() {
    inquirer
        .prompt ({
            type: "text",
            name: "email",
            message: "What is this employee's email?"
        })
        .then(({email}) => {
            this.employee.email = email;

            this.getRole();
        })
}


Employee.prototype.getRole = function() {
    this.role = 'Employee';

    console.log(this.employee);
    return this.role;
    
}



module.exports = Employee;