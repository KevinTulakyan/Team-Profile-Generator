const Manager = require('../lib/Manager')

test('Manager object', () =>{
    const manager = new Manager('Dave', 1, 'email@gmail.com', 11);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('Name', () =>{
    const manager = new Manager('Dave', 1, 'email@gmail.com',11);

    expect(manager.name).toEqual(expect.any(String));
});

test('Id', () =>{
    const manager = new Manager('Dave', 1, 'email@gmail.com',11);

    expect(manager.id).toEqual(expect.any(Number));
});

test('Email', () =>{
    const manager = new Manager('Dave', 1, 'email@gmail.com',11);

    expect(manager.email).toEqual(expect.any(String));
});

test('Role',() =>{
    const manager = new Manager('Dave', 1, 'email@gmail.com',11)

    expect(manager.getRole()).toBe('Manager');
})

