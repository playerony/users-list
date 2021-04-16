import { isString } from '../is-string/is-string.function';
import { removeWordAccent } from '../remove-word-accent/remove-word-accent.function';

export const compareWordsWithoutAccents = (wordA: string, wordB: string): boolean => {
  const valueA = isString(wordA) ? wordA : '';
  const valueB = isString(wordB) ? wordB : '';

  const valueALowerCase = valueA.toLowerCase();
  const valueBLowerCase = valueB.toLowerCase();

  const valueAWithoutAccent = removeWordAccent(valueALowerCase);
  const valueBWithoutAccent = removeWordAccent(valueBLowerCase);

  return valueAWithoutAccent.includes(valueBWithoutAccent);
};
