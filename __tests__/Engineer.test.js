const Engineer = require('../lib/Engineer');

test('creates a engineer object.', () => {
    const testEngineer = new Engineer('Edgar',123456,'test@test.com','gitUser');

    expect(testEngineer.name).toEqual(expect.any(String));
    expect(testEngineer.id).toEqual(expect.any(Number));
    expect(testEngineer.email).toEqual(expect.any(String));
});

test('checks if getName() function returns a String', () => {
    const testEngineer = new Engineer('Edgar',123456,'test@test.com','gitUser');

    expect(testEngineer.getName()).toEqual(expect.any(String));
});

test('checks if getId() function returns a number', () => {
    const testEngineer = new Engineer('Edgar',123456,'test@test.com','gitUser');

    expect(testEngineer.getId()).toEqual(expect.any(Number));
});

test('checks if getEmail() function returns a String', () => {
    const testEngineer = new Engineer('Edgar',123456,'test@test.com','gitUser');

    expect(testEngineer.getEmail()).toEqual(expect.any(String));
});

test('checks if getGithub() function returns a String', () => {
    const testEngineer = new Engineer('Edgar',123456,'test@test.com','gitUser');

    expect(testEngineer.getGithub()).toEqual(expect.any(String));
});

test('checks if getRole() function returns a String', () => {
    const testEngineer = new Engineer('Edgar',123456,'test@test.com','gitUser');

    expect(testEngineer.getRole()).toEqual('Engineer');
});