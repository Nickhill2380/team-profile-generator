const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () => {
    const engineer = new Engineer('Eric', 1, 'email@email.com', 'github');

    expect(engineer.github).toBe('github');
});