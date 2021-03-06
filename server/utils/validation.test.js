 const expect = require('expect');

 const {isRealString} = require('./validation');

 describe('Verify if it is a real string', () => {
    it('should reject non-string values', () => {
        expect(isRealString(123)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString(' ')).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        expect(isRealString(' B')).toBe(true);
    });
 });