const { Right, Left, findColor } = require('./index');

describe('Either', () => {
  describe('Right', () => {
    it('should allow composition', () => {
      const result = Right(1).map(i => i + 1).inspect();
      expect(result).toEqual('Right(2)')
    })

    it('should call right side fold function', () => {
      const result = Right(2)
        .map(x => x + 1)
        .map(x => x / 2)
        .fold(x => 'error', x => x);
      expect(result).toBe(1.5);
    })
  })

  describe('Left', () => {
    it('should not allow composition', () => {
      const result = Left(1).map(i => i + 1).inspect();
      expect(result).toEqual('Left(1)')
    })

    it('should call left side fold function', () => {
      const result = Left(2)
        .map(x => x + 1)
        .map(x => x / 2)
        .fold(x => 'error', x => x);
      expect(result).toBe('error');
    })
  })

  describe('Examples', () => {

    describe('findColor', () => {
      it('should return hex value of color passed in', () => {
        expect(findColor('red').fold(e => 'error', c => c)).toBe('#ff4444');
        expect(findColor('yellow').fold(e => 'error', c => c)).toBe('#fff68f');
      });

      it('should allow coposition', () => {
        expect(
          findColor('red')
            .map(c => c.slice(1))
            .fold(e => 'no color', c => c.toUpperCase())
        ).toBe('FF4444');
      });

      it('should handle colors not in the object', () => {
        expect(
          findColor('green')
            .map(c => c.slice(1))
            .fold(e => 'no color', c => c.toUppercase())
      ).toBe('no color');
      })
    });
  });
});