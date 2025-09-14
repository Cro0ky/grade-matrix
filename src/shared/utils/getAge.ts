import dayjs from 'dayjs';

export function getAge(birthdate?: string | number | Date | null, withWord: boolean = true): string | number {
  if (!birthdate) return withWord ? '' : 0;

  const age = typeof birthdate === 'number' ? birthdate : dayjs().diff(birthdate, 'year');

  if (!withWord) return age;

  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  let word = 'лет';

  if (lastTwoDigits < 11 || lastTwoDigits > 14) {
    if (lastDigit === 1) word = 'год';
    else if (lastDigit >= 2 && lastDigit <= 4) word = 'года';
  }

  return `${age} ${word}`;
}
