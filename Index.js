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

function compileTeam() {
    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1 w-100 text-center fs-1 !important" style="font-size: 36px">My Team</span>
    </nav>
    <br/>
    <div class="row justify-content-around" style="grid-row-gap: 20px">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 0; i < team.length; i++) {
        let object = `
        <div class="col-4 d-flex justify-content-center">
            <div class="card" style="width: 40rem;">
                <div class="card-header bg-primary text-white fs-3 fw-bold">
                    <h4 class="bg-primary text-white fs-3 fw-bold text-center">
                        ${team[i].name}
                    </h4>
                    <h6>
                        ${team[i].getRole()} <span> ` 
                        
        if(team[i].getRole() === "Manager") {
            object += `
            <i class="fas fa-crown"></i> </span>
            `
        } else if(team[i].getRole() === "Engineer") {
            object += `
            <i class="fas fa-tools"></i> </span>
            `
        } else {
            object += `
            <i class="fas fa-pencil-alt"></i> </span>
            `
        }
                    
        object += `                
                    </h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID Number: ${team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
        
        `
        if (team[i].officeNumber) {
            object += `
                        <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
            `
        }
        if (team[i].github) {
            object += `
                        <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a></li>
            `
        }
        if (team[i].school) {
            object += `
                        <li class="list-group-item">Current School: ${team[i].school}</li>
            `
        }
        object += `
                    </ul>
                </div>
            </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
</body>
</html>
`
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/index.html`, htmlArray.join(""), function (err) {

    })
}


start()
   
