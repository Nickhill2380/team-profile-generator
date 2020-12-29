const { TestScheduler } = require("jest");
const Manager = require("../lib/Manager.js");

test("creates the Manager object", () => {
    const manager = new Manager("Liam", 1)

    expect(manager.officeNumber).toEqual(expect.any(Number));
});