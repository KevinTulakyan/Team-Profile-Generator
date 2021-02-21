const Manager = require('../lib/Manager')

test('Role', () =>{
    const job = new Manager('Manager');

    expect(job.role).toEqual(expect.any(String));
});