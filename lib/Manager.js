const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = 0, email = '', officeNum = 0) {
        super(name, id, email);
        this.officeNum = officeNum
        this.role = 'Manager'
    }

    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager