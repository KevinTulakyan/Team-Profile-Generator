const fs = require('fs')
const inquirer =  require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const members = []; 

function start() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "Enter Manager's name:"
        },
        {
            type: 'text',
            name: 'email',
            message: "Enter Manager's email:"
        },
        {
            type: 'number',
            name: 'id',
            message: "Enter Manager's id number:"
        },
        {
            type: 'number',
            name: 'officeNum',
            message: "Enter Manager's office number:"
        }
    ])
    .then(function (data) {
        const name = data.name
        const email = data.email
        const id = data.id
        const officeNum = data.officeNum
        const member = new Manager(name,email,id,officeNum)
        members.push(member)
        addMembers();
    });
}

function addMembers() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add additional team members?',
            choices: ['Add Engineer', 'Add Intern', 'No, completed'],
            name: 'addMemberData'
        }
    ])
    .then(function (data) {
        switch (data.addMemberData) {
            case 'Add Engineer':
                addEngineer();
            break;

            case 'Add Intern':
                addIntern();
            break;

            case 'No, completed':
                compileTeam();
                console.log(members)
            break;
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {   
            type: 'text',
            name: 'name',
            message: "Engineer's name:"
        },
        {
            type: 'number',
            name: 'id',
            message: "Enter Engineer's id number:"
        },
        {
            type: 'text',
            name: 'email',
            message: "Engineer's email address:"
        },
        {
            type: 'text',
            name: 'github',
            message: "Engineer's Github profile:"
        }
    ])
    .then(function (data) {
        const name = data.name
        const id =  data.id
        const email = data.email
        const github = data.github
        const member = new Engineer(name, id, email, github)
        members.push(member)
        addMembers()
    });

};

function addIntern() {
    inquirer.prompt([
        {   
            type: 'text',
            name: 'name',
            message: "Intern's name:"
        },
        {
            type: 'number',
            name: 'id',
            message: "Enter Intern's id number:"
        },
        {
            type: 'text',
            name: 'email',
            message: "Intern's email address:"
        },
        {
            type: 'text',
            name: 'school',
            message: "Intern's school:"
        }
    ])
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const member = new Intern(name, id, email, school)
        members.push(member)
        addMembers()
    });
};



start()
   
