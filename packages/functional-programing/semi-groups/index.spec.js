const { Map } = require('immutable-ext');
const { Sum, All, First } = require('.');

describe('SemiGroups', () => {
  describe('Sum', () => {
    it('shoud be a type that allows us to concat our addition', () => {
      const result = Sum(2).concat(Sum(2)).x;
      expect(result).toBe(4);    
    })
  })

  describe('All', () => {
    it('shoud be a type that allows us to concat our booleans', () => {
      expect(All(true).concat(All(false)).x).toBe(false);    
      expect(All(true).concat(All(true)).x).toBe(true);    
    })
  })

  describe('First', () => {
    it('shoud be type that will throw out any concated First()', () => {
      expect(First('foo').concat(First('bar')).x).toBe('foo');       
    })
  })

  describe('Merging data with semi groups', () => {
    const acc1 = Map({
      name: First('Braxton'),
      isPaid: All(true),
      points: Sum(2),
      friends: ['Sydney'],
    })
    const acc2 = Map({
      name: First('Braxton'),
      isPaid: All(false),
      points: Sum(10),
      friends: ['Merrick'],
    })
    const result = acc1.concat(acc2);
    const expected = Map({
      name: First('Braxton'),
      isPaid: All(false),
      points: Sum(12),
      friends: ['Sydney', 'Merrick'],
    })
    expect(result).toEqual(expected);
  })
})