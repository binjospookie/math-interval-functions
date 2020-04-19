const intervalsList: readonly {
  readonly comparator: (x: { readonly max: number; readonly min: number; readonly value: number }) => boolean;
  readonly regex: RegExp;
}[] = [
  {
    comparator: ({ value, min, max }) => value > min && value < max,
    regex: /^\(([\d-.]*),([\d-.]*)\)$/,
  },
  {
    comparator: ({ value, min, max }) => value >= min && value <= max,
    regex: /^\[([\d-.]*),([\d-.]*)\]$/,
  },
  {
    comparator: ({ value, min, max }) => value > min && value <= max,
    regex: /^\(([\d-.]*),([\d-.]*)\]$/,
  },
  {
    comparator: ({ value, min, max }) => value >= min && value < max,
    regex: /^\[([\d-.]*),([\d-.]*)\)$/,
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
      // @ts-ignore allow js to cast string
      max: max || Infinity,
      // @ts-ignore allow js to cast string
      min: min || -Infinity,
      value,
    });
  });
