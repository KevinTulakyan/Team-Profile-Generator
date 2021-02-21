const Engineer = require('../lib/engineer')

test('engineer object', () =>{
    const engineer = new Engineer('Dave', 1, 'email@gmail.com', 'some@git.com');
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('Name', () =>{
    const engineer = new Engineer('Dave', 1, 'email@gmail.com','some@git.com');

    expect(engineer.name).toEqual(expect.any(String));
});

test('Id', () =>{
    const engineer = new Engineer('Dave', 1, 'email@gmail.com','some@git.com');

    expect(engineer.id).toEqual(expect.any(Number));
});

test('Email', () =>{
    const engineer = new Engineer('Dave', 1, 'email@gmail.com','some@git.com');

    expect(engineer.email).toEqual(expect.any(String));
});

test('Get github',() => {
    const engineer = new Engineer('Dave', 1, 'email@gmail.com','some@git.com')

    expect(engineer.getGithub()).toEqual(expect.any(String))
})

test('Role',() =>{
    const engineer = new Engineer('Dave', 1, 'email@gmail.com','some@git.com')

    expect(engineer.getRole()).toBe('Engineer');
})
