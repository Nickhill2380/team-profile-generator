class Employee {
    constructor(name = '', id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

console.log(new Employee);

module.exports = Employee;