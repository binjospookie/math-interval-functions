export const gt = (a: number, b: number) => a > b;
export const gte = (a: number, b: number) => a >= b;
export const lt = (a: number, b: number) => a < b;
export const lte = (a: number, b: number) => a <= b;

export const parseLimit = (value: string, defaultValue: number) => (value.length === 0 ? defaultValue : ~~value);
