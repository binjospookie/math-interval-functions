import { bold } from 'chalk';
import { performance } from 'perf_hooks';

import { inInterval } from '../index';

const displayResults = (start: number, end: number, label: string) =>
  process.stdout.write(`${label}: ${bold((end - start).toFixed(3))}ms\n`);

const dataToTest = ['[30,100)', '[100,300)', '[300,5000)', '[5000,10000]'];

describe('Performance test', () => {
  test('current version', () => {
    const startTime = performance.now();

    dataToTest.some((interval) => inInterval({ interval, value: 7000 }));

    const endTime = performance.now();

    displayResults(startTime, endTime, 'current version');
  });
});
