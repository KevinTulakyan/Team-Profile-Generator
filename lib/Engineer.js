const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id, email, github){
        super(name,id,email)
        this.github = github;
    }

    getGithub(){
        return 'Engineer'
    }

    getRole(){
        return 'Engineer';
    }

};

module.exports = Engineer;