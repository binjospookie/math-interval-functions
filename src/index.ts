const getMinMax = ([_, min, max]: RegExpExecArray) => ({
  min: min === '' ? -Infinity : +min,
  max: max === '' ? Infinity : +max,
});

const a = /^\(([\d-.]*),([\d-.]*)\)$/;
const b = /^\[([\d-.]*),([\d-.]*)\]$/;
const c = /^\(([\d-.]*),([\d-.]*)\]$/;
const d = /^\[([\d-.]*),([\d-.]*)\)$/;

export const inInterval = ({ interval, value }: { interval: string; value: number }) => {
  const oo = a.exec(interval);
  if (oo) {
    const { min, max } = getMinMax(oo);

    return value > min && value < max;
  }

  const cc = b.exec(interval);
  if (cc) {
    const { min, max } = getMinMax(cc);

    return value >= min && value <= max;
  }

  const oc = c.exec(interval);
  if (oc) {
    const { min, max } = getMinMax(oc);

    return value > min && value <= max;
  }

  const co = d.exec(interval);
  if (co) {
    const { min, max } = getMinMax(co);

    return value >= min && value < max;
  }

  return false;
};
