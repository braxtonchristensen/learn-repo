const { Sum, All } = require('.');

describe('SemiGroups', () => {
  describe('Sum', () => {
    it('shoud be a method that allows us to concat our addition', () => {
      const result = Sum(2).concat(Sum(2)).x;
      expect(result).toBe(4);    
    })
  })

  describe('All', () => {
    it('shoud be a method that allows us to concat our booleans', () => {
      expect(All(true).concat(All(false)).x).toBe(false);    
      expect(All(true).concat(All(true)).x).toBe(true);    
    })
  })
})