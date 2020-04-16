import { closed, leftClosed, leftOpen, opened } from './constants';

interface IComparatorArgument {
  readonly max: number;
  readonly min: number;
  readonly value: number;
}

export interface IInterval {
  readonly comparator: (x: IComparatorArgument) => boolean;
  readonly regex: RegExp;
}

export const intervalsList: readonly IInterval[] = [
  {
    comparator: ({ value, min, max }: IComparatorArgument) => value > min && value < max,
    regex: opened,
  },
  {
    comparator: ({ value, min, max }: IComparatorArgument) => value >= min && value <= max,
    regex: closed,
  },
  {
    comparator: ({ value, min, max }: IComparatorArgument) => value > min && value <= max,
    regex: leftOpen,
  },
  {
    comparator: ({ value, min, max }: IComparatorArgument) => value >= min && value < max,
    regex: leftClosed,
  },
];
