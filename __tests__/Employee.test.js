const Employee = require('../lib/Employee');

test('creates a employee object.', () => {
    const testEmployee = new Employee('Edgar',123456,'test@test.com');

    expect(testEmployee.name).toEqual(expect.any(String));
    expect(testEmployee.id).toEqual(expect.any(Number));
    expect(testEmployee.email).toEqual(expect.any(String));
});

test('checks if getName() function returns a String', () => {
    const testEmployee = new Employee('Edgar',123456,'test@test.com');

    expect(testEmployee.getName()).toEqual(expect.any(String));
});

test('checks if getId() function returns a number', () => {
    const testEmployee = new Employee('Edgar',123456,'test@test.com');

    expect(testEmployee.getId()).toEqual(expect.any(Number));
});

test('checks if getEmail() function returns a String', () => {
    const testEmployee = new Employee('Edgar',123456,'test@test.com');

    expect(testEmployee.getEmail()).toEqual(expect.any(String));
});

test('checks if getRole() function returns a String', () => {
    const testEmployee = new Employee('Edgar',123456,'test@test.com');

    expect(testEmployee.getRole()).toEqual('Employee');
});