const findOdd = require('./findOdd');

describe('the findOdd name canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('findOdd', () => {
  it('should return 0 for input equal to [0]', () => {
    expect(findOdd([0])).toBe(0);
  });
});
