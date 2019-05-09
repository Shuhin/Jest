const functions = require('./functions');

beforeAll(() => initdatabase());
afterAll(() =>  closeDatabase());

const initdatabase = () => console.log('Database Initialized...');
const closeDatabase = () => console.log('Database Closed...');

test (`Add 2 + 2 to equal 4`, () => {
    expect(functions.add(2,2)).toBe(4);
});

test (`Add 2 + 2 to NOT equal 5`, () => {
    expect(functions.add(2,2)).not.toBe(5);
})

test (`Should be null`, () => {
    expect(functions.isNull()).toBeNull();
})

test (`Should be falsy`, () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

//toBe is for primitative types not for object or Array like below 
test (`Should be me`, () => {
    expect(functions.createUser()).toEqual ({ firstName:'Adiba', lastName: 'Shuhin'});
});

//LEstt than and  greater than
test('should be under 1600', ()=> {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//if we want it to be case insensitive we need to put an extra i after /
test('There is no I in Team', () => {
    expect('team').not.toMatch(/I/);
})

test (`Admin should be in usernames`, () => {
    usernames = ['john', 'kelly', 'admin'];
    expect(usernames).toContain('admin');
});

//working with async data,, we must have both expect and return to make it work..or make it async
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
           expect(data.name).toEqual('Leanne Graham');
       });

//put a another test in package json like this
// "testwatch": "jest --watchAll" and ir will autimatically run all test when you say-
// npm run testwatch 
//and  will keep watchinng and testion automatically when ypu make a cahnage