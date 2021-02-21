const Intern = require('../lib/Intern');

test('intern object', () =>{
    const intern = new Intern('Dave', 1, 'email@gmail.com', 'Lobert');
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('Name', () =>{
    const intern = new Intern('Dave', 1, 'email@gmail.com', 'Lobert');

    expect(intern.name).toEqual(expect.any(String));
});

test('Id', () =>{
    const intern = new Intern('Dave', 1, 'email@gmail.com', 'Lobert');

    expect(intern.id).toEqual(expect.any(Number));
});

test('Email', () =>{
    const intern = new Intern('Dave', 1, 'email@gmail.com', 'Lobert');

    expect(intern.email).toEqual(expect.any(String));
});

test('School name', ()=>{
    const intern = new Intern('Dave', 1, 'email@gmail.com', 'Lobert');

    expect(intern.getSchool()).toEqual(expect.any(String))
})


