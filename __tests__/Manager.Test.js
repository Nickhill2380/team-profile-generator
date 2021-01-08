const Manager = require("../lib/Manager.js");

test("creates the Manager object", () => {
    const manager = new Manager("Liam", 1, 'email@email.com', 14)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("returns role", () => {
    const manager = new Manager('Liam', 1 ,'email@website.com', 14 );

    expect(manager.getRole()).toBe('Manager');
});