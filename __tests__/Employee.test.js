const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Andy', 1 ,'email@website.com');

    expect(employee.name).toBe('Andy');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});

test("gets employee's role", () => {
    const employee = new Employee('Andy', 1 ,'email@website.com');

    expect(employee.getRole()).toBe('Employee');
});