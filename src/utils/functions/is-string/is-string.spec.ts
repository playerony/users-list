import { isString } from './is-string.function';

describe('isString Function', () => {
  it('should return false when provided parameter is not a string', () => {
    expect(isString({})).toBeFalsy();
    expect(isString(123)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString([1, 2, 3])).toBeFalsy();
    expect(isString(new Date())).toBeFalsy();
  });

  it('should return true when provided parameter is a string', () => {
    expect(isString('')).toBeTruthy();
    expect(isString('test')).toBeTruthy();
  });
});
