const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () => {
    const engineer = new Engineer('Eric', 'github');

    expect(engineer.github).toBe('github');
});