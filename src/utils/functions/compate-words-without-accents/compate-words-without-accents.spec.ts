import { compareWordsWithoutAccents } from './compate-words-without-accents.function';

describe('compareWordsWithoutAccents Function', () => {
  it('should pass when at least one of values is a falsy one', () => {
    expect(compareWordsWithoutAccents(null as any, undefined as any)).toBeTruthy();

    expect(compareWordsWithoutAccents(undefined as any, 'test')).toBeFalsy();
  });

  it('should compare same words with different accents', () => {
    expect(compareWordsWithoutAccents('A. Ashanti Mineração', 'A. Ashanti Mineracao')).toBeTruthy();
  });

  it('should compare same words with same accents', () => {
    expect(compareWordsWithoutAccents('A. Ashanti Mineração', 'A. Ashanti Mineração')).toBeTruthy();
    expect(
      compareWordsWithoutAccents('   A. Ashanti Mineração     ', '     Mineração    '),
    ).toBeTruthy();
  });

  it('should compare word included in with same different accents', () => {
    expect(compareWordsWithoutAccents('A. Ashanti Mineração', 'Mineracao')).toBeTruthy();
  });

  it('should compare different words', () => {
    expect(compareWordsWithoutAccents('A. Ashanti Mineração', 'Agbaou')).toBeFalsy();
  });
});
