import { intervalsList } from './services/intervals';
import { isNill } from './services/logic';
import { parseLimit } from './services/math';

export const inInterval = (interval: string, value: number) =>
  intervalsList.reduce((acc, { regex, comparator }) => {
    const matchResult = interval.match(regex);

    if (isNill(matchResult)) {
      return acc;
    }

    const [match, min, max] = matchResult;

    return comparator({
      max: parseLimit(max, Infinity),
      min: parseLimit(min, -Infinity),
      value,
    });
  }, false);
