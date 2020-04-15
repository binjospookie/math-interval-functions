import { intervalsList } from './services/intervals';
import { isEmpty, isNill } from './services/logic';

const parseLimit = (value: string, defaultValue: number) => (isEmpty(value) ? defaultValue : Number(value));

export const inInterval = (interval: string, value: number) => {
  const suitableIntervalFromList = intervalsList.find(({ regex }) => !isNill(interval.match(regex)));

  if (isNill(suitableIntervalFromList)) {
    return false;
  }

  const { regex, comparator } = suitableIntervalFromList;

  // @ts-ignore we already found it upper
  const [match, min, max] = interval.match(regex);

  return comparator({
    max: parseLimit(max, Infinity),
    min: parseLimit(min, -Infinity),
    value,
  });
};
