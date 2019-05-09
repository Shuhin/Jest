const chunkArray = require('./chunk');

test('chunkArray Function exist', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an Array of 10 values with length of 2', () => {
   const numbers = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   const len = 2;
   const chunkedArr = chunkArray(numbers, len);

    expect(chunkedArr).toEqual([[5, 1], [2, 3], [4, 5], [6, 7], [8, 9]]);
});