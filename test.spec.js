const encode = require('.');

describe('test encode', () => {
  it('should encode "school" properly', () => {
    expect(encode('school')).toEqual('s1c1h1o2l1');
  });

  it('should encode "hello" properly', () => {
    expect(encode('hello')).toEqual('h1e1l2o1');
  });

  it('should encode "cheese" properly', () => {
    expect(encode('cheese')).toEqual('c1h1e2s1e1');
  });
});