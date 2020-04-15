import { closed, leftClosed, leftOpen, opened } from './intervals';
import { gt, gte, lt, lte } from './services/math';
import { isNill } from './services/type';

const intervals = [
  {
    compare: [gt, lt],
    regex: opened,
  },
  {
    compare: [gte, lte],
    regex: closed,
  },
  {
    compare: [gt, lte],
    regex: leftOpen,
  },
  {
    compare: [gte, lt],
    regex: leftClosed,
  },
];

export const inInterval = (incomeInterval: string, value: number) => {
  // tslint:disable-next-line:no-shadowed-variable
  const interval = intervals.find(({ regex }) => !isNill(incomeInterval.match(regex)));

  if (isNill(interval)) {
    return false;
  }

  const {
    regex,
    compare: [minCom, maxCom],
  } = interval;

  const [match, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY] = incomeInterval.match(regex) || [];

  return minCom(value, Number(min)) && maxCom(value, Number(max));
};
