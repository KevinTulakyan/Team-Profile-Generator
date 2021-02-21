const { TestScheduler } = require('jest')
const Employee = require('../lib/Intern');


test('Employee object', () =>{
    const employee = new Employee('Dave', 1, 'email@gmail.com');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
});

test('Name', () =>{
    const employee = new Employee('Dave', 1, 'email@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
});

test('Id', () =>{
    const employee = new Employee('Dave', 1, 'email@gmail.com');

    expect(employee.id).toEqual(expect.any(Number));
});

test('Email', () =>{
    const employee = new Employee('Dave', 1, 'email@gmail.com');

    expect(employee.email).toEqual(expect.any(String));
});
