const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () => {
    const engineer = new Engineer('Eric', 1, 'email@email.com', 'github');

    expect(engineer.github).toBe('github');
});

test("returns github", () => {
    const engineer = new Engineer('Andy', 1 ,'email@website.com', github = 'github');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("returns role", () => {
    const engineer = new Engineer('Andy', 1 ,'email@website.com', github = 'github');

    expect(engineer.getRole()).toBe('Engineer');
});