export const isEmpty = (x: string) => x.length === 0;
export const isNill = (x: unknown): x is null | undefined => x === null || x === undefined;
