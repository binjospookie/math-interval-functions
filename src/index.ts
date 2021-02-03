const getMinMax = ([_, min, max]: RegExpExecArray) => ({
  min: min === '' ? -Infinity : +min,
  max: max === '' ? Infinity : +max,
});

const a = /^\(([\d-.]*),([\d-.]*)\)$/;
const b = /^\[([\d-.]*),([\d-.]*)\]$/;
const c = /^\(([\d-.]*),([\d-.]*)\]$/;
const d = /^\[([\d-.]*),([\d-.]*)\)$/;

const gt = (a: number, b: number) => (isFinite(a) ? a > b : true);
const lt = (a: number, b: number) => (isFinite(a) ? a < b : true);
const gte = (a: number, b: number) => a >= b;
const lte = (a: number, b: number) => a <= b;

export const inInterval = ({ interval, value }: { interval: string; value: number }) => {
  const oo = a.exec(interval);
  if (oo) {
    const { min, max } = getMinMax(oo);

    return gt(value, min) && lt(value, max);
  }

  const cc = b.exec(interval);
  if (cc) {
    const { min, max } = getMinMax(cc);

    return gte(value, min) && lte(value, max);
  }

  const oc = c.exec(interval);
  if (oc) {
    const { min, max } = getMinMax(oc);

    return gt(value, min) && lte(value, max);
  }

  const co = d.exec(interval);
  if (co) {
    const { min, max } = getMinMax(co);

    return gte(value, min) && lt(value, max);
  }

  return false;
};
