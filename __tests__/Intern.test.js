const Intern = require("../lib/Intern.js");

test('creates intern object', () => {
    const intern = new Intern ("Nikki", 1, 'email@email.com', "school");

    expect(intern.school).toBe("school");
});

test("returns school", () => {
    const intern = new Intern('Andy', 1 ,'email@website.com', school = 'school');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("returns role", () => {
    const intern = new Intern('Andy', 1 ,'email@website.com', school = 'school');

    expect(intern.getRole()).toBe('Intern');
});
