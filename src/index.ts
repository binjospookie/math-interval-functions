import { intervalsList } from './services/intervals';

export const inInterval = (interval: string, value: number) =>
  intervalsList.reduce((acc, { regex, comparator }) => {
    const matchResult = interval.match(regex);

    if (!matchResult) {
      return acc;
    }

    const [match, min, max] = matchResult;

    return comparator({
      max: !max ? Infinity : ~~max,
      min: !min ? -Infinity : ~~min,
      value,
    });
  }, false);
