import { intervalsList } from './services/intervals';
import { isNil } from './services/logic';
import { parseLimit } from './services/math';

export const inInterval = (interval: string, value: number) =>
  intervalsList.reduce((acc, { regex, comparator }) => {
    const matchResult = interval.match(regex);

    if (isNil(matchResult)) {
      return acc;
    }

    // @ts-ignore
    const [match, min, max] = matchResult;

    return comparator({
      max: parseLimit(max, Infinity),
      min: parseLimit(min, -Infinity),
      value,
    });
  }, false);
