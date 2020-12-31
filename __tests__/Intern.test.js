const Intern = require("../lib/Intern.js");

test('creates intern object', () => {
    const intern = new Intern ("Nikki", "school");

    expect(intern.school).toBe("school");
})