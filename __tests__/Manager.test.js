const Manager = require('../lib/Manager');

test('creates a Manager object.', () => {
    const testManager = new Manager('Phil', 654321, 'test@test.com', 321);
    
    expect(testManager.name).toEqual(expect.any(String));
    expect(testManager.id).toEqual(expect.any(Number));
    expect(testManager.email).toEqual(expect.any(String));
    expect(testManager.officeNum).toEqual(expect.any(Number));
});

test('checks if getName() function returns a String', () => {
    const testManager = new Manager('Phil', 654321, 'test@test.com', 321);

    expect(testManager.getName()).toEqual(expect.any(String));
});

test('checks if getId() function returns a number', () => {
    const testManager = new Manager('Phil', 654321, 'test@test.com', 321);

    expect(testManager.getId()).toEqual(expect.any(Number));
});

test('checks if getEmail() function returns a String', () => {
    const testManager = new Manager('Phil', 654321, 'test@test.com', 321);

    expect(testManager.getEmail()).toEqual(expect.any(String));
});

test('checks if getRole() function returns a String', () => {
    const testManager = new Manager('Phil', 654321, 'test@test.com', 321);

    expect(testManager.getRole()).toEqual('Manager');
});