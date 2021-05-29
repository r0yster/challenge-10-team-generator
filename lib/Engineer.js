const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = 0, email = '', username = '') {
        super(name, id, email);
        this.username = username;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.username;
    }
}

module.exports = Engineer