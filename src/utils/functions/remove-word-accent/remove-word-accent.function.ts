import { isString } from '../is-string/is-string.function';

export const removeWordAccent = (phrase: string): string => {
  if (!isString(phrase)) {
    return '';
  }

  const normalizedPhrase = phrase.normalize('NFD');

  return normalizedPhrase.replace(/[\u0300-\u036f]/g, '');
};
