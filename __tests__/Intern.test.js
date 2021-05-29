const Intern = require('../lib/Intern');

test('creates a intern object.', () => {
    const testIntern = new Intern('Edgar',123456,'test@test.com','UT');

    expect(testIntern.name).toEqual(expect.any(String));
    expect(testIntern.id).toEqual(expect.any(Number));
    expect(testIntern.email).toEqual(expect.any(String));
});

test('checks if getName() function returns a String', () => {
    const testIntern = new Intern('Edgar',123456,'test@test.com','UT');

    expect(testIntern.getName()).toEqual(expect.any(String));
});

test('checks if getId() function returns a number', () => {
    const testIntern = new Intern('Edgar',123456,'test@test.com','UT');

    expect(testIntern.getId()).toEqual(expect.any(Number));
});

test('checks if getEmail() function returns a String', () => {
    const testIntern = new Intern('Edgar',123456,'test@test.com','UT');

    expect(testIntern.getEmail()).toEqual(expect.any(String));
});

test('checks if getSchool() function returns a String', () => {
    const testIntern = new Intern('Edgar',123456,'test@test.com','UT');

    expect(testIntern.getSchool()).toEqual(expect.any(String));
});

test('checks if getRole() function returns a String', () => {
    const testIntern = new Intern('Edgar',123456,'test@test.com','UT');

    expect(testIntern.getRole()).toEqual('Intern');
});