const {
  getCharFromNumberString,
  boxCharFromNumber,
  functionalCharFromNumber,
  moneyToFloat,
  percentToFloat,
  applyDiscount,
} = require('./');

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

  describe('moneyToFloat', () => {
    it('should return parsed number from money string', () => {
      expect(moneyToFloat('$5.00')).toBe(5);
    })
  })

  describe('percentToFloat', () => {
    it('should return parsed number from percent string', () => {
      expect(percentToFloat('20%')).toBe(0.2);
    })
  })

  describe('applyDiscount', () => {
    it('should apply discount to price', () => {
      expect(applyDiscount('$5.00', '20%')).toBe(4);
    })
  })
})