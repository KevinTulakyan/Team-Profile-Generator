const inquirer =  require('inquirer');
const Engineer = require('./lib/Engineer');


inquirer.prompt({
    type: 'text',
    name: 'name',
    message: 'Employee name:'
},
{
    type: 'text',
    name: 'email',
    message: 'Employee email:'
},
{
    type: 'text',
    name: 'id',
    message: 'Employee id:'
},
{
    type: 'list',
    name: 'role',
    choice: ['Manager','Engineer','Intern']
})