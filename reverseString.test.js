const reverseString = require('./reverseString');

test('reverseString Function exist', () => {
    expect(reverseString).toBeDefined();
});

test('String reverse', () => {
    expect(reverseString('hello')).toEqual('olleh');
});