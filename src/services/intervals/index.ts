import { gt, gte, lt, lte } from '../math';
import { closed, leftClosed, leftOpen, opened } from './constants';

type TCompareFn = (a: number, b: number) => boolean;

interface IComparatorArgument {
  readonly max: number;
  readonly min: number;
  readonly value: number;
}

const makeComparator = (fn1: TCompareFn, fn2: TCompareFn) => ({ value, min, max }: IComparatorArgument) =>
  fn1(value, min) && fn2(value, max);

interface IInterval {
  readonly comparator: (x: IComparatorArgument) => boolean;
  readonly regex: RegExp;
}

export const intervalsList: readonly IInterval[] = [
  {
    comparator: makeComparator(gt, lt),
    regex: opened,
  },
  {
    comparator: makeComparator(gte, lte),
    regex: closed,
  },
  {
    comparator: makeComparator(gt, lte),
    regex: leftOpen,
  },
  {
    comparator: makeComparator(gte, lt),
    regex: leftClosed,
  },
];
