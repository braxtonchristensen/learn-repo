const {sum, countDown} = require('./');

describe('Recursion', () => {
  describe('Recursion(sum)', () => {
    it('fold the numbers into one value', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    })
  })

  describe('Corecursion(contDown)', () => {
    it('should unfold the value to a group', () => {
      expect(countDown(5)).toEqual([5, 4, 3, 2, 1]);
    })
  })
})