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

test("returns name", () => {
    const employee = new Employee('Andy', 1 ,'email@website.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("returns id", () => {
    const employee = new Employee('Andy', 1 ,'email@website.com');

    expect(employee.getId()).toEqual(expect.any(String));
});

test("returns email", () => {
    const employee = new Employee('Andy', 1 ,'email@website.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});