const hello = require('./findOdd');

describe('the kata name canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('hello', () => {
  it('should return hello', () => {
    expect(findOdd()).toBe('hello');
  });
});
