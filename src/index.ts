const intervalsList: readonly {
  readonly comparator: (x: { readonly max: number; readonly min: number; readonly value: number }) => boolean;
  readonly regex: RegExp;
}[] = [
  {
    comparator: ({ value, min, max }) => value > min && value < max,
    regex: /^\(([0-9-.]*),([0-9-.]*)\)$/,
  },
  {
    comparator: ({ value, min, max }) => value >= min && value <= max,
    regex: /^\[([0-9-.]*),([0-9-.]*)\]$/,
  },
  {
    comparator: ({ value, min, max }) => value > min && value <= max,
    regex: /^\(([0-9-.]*),([0-9-.]*)\]$/,
  },
  {
    comparator: ({ value, min, max }) => value >= min && value < max,
    regex: /^\[([0-9-.]*),([0-9-.]*)\)$/,
  },
];

export const inInterval = ({ interval, value }: { interval: string; value: number }) =>
  intervalsList.some(({ regex, comparator }) => {
    const matchResult = regex.exec(interval);

    if (!matchResult) {
      return false;
    }

    const [match, min, max] = matchResult;

    return comparator({
      max: !max ? Infinity : ~~max,
      min: !min ? -Infinity : ~~min,
      value,
    });
  });
