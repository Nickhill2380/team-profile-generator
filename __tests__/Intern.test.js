const Intern = require("../lib/Intern.js");

test('creates intern object', () => {
    const intern = new Intern ("Nikki", 1, 'email@email.com', "school");

    expect(intern.school).toBe("school");
})