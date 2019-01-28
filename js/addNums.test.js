const addNums = require('./functions.js');

test('adds 1 + 2 to equal 3', () => {
  expect(addNums(1, 2)).toBe(3);
});

test('adds -1 + 13 to equal 12', () => {
    expect(addNums(-1, 13)).toBe(12);
});