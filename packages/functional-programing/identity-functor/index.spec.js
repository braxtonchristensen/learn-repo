const { getCharFromNumberString, boxCharFromNumber, functionalCharFromNumber } = require('./');

describe('Identity Functors', () => {
  describe('getCharFromNumberString', () => {
    it('should return the char represented by code passed in', () => {
      expect(getCharFromNumberString(' 64 ')).toBe('A');
    })
  })

  describe('boxCharFromNumber', () => {
    it('should return the char represented by code passed in', () => {
      expect(boxCharFromNumber(' 64 ')).toEqual(['A']);
    })
  })

  describe('functionalCharFromNumber', () => {
    it('should return the char represented by code passed in', () => {
      expect(functionalCharFromNumber(' 64 ')).toEqual('A');
    })
  })
})