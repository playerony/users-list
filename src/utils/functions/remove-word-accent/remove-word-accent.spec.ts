import { removeWordAccent } from './remove-word-accent.function';

describe('removeWordAccent Function', () => {
  it('should return empty string when provided value is falsy', () => {
    expect(removeWordAccent(null as any)).toEqual('');
    expect(removeWordAccent(undefined as any)).toEqual('');
  });

  it('should return string with removed word accents', () => {
    const specialString = 'éàçèñ';

    expect(removeWordAccent(specialString)).toEqual('eacen');
  });
});
