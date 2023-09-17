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
  
  it('should return 2 for input equal to [1, 1, 2]', () => {
    expect(findOdd([1,1,2])).toBe(2);
  });

  it('should return 4 for input equal to [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
    expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4)
  });
});
