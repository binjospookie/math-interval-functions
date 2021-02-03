// @ts-ignore
import * as benchmarkSpec from 'benchmark';

import { inInterval } from '../index';

const suite = new benchmarkSpec.Suite();

const formatNumber = (x: number) =>
  String(x)
    .replace(/\d{3}$/, ',$&')
    .replace(/^(\d)(\d{3})/, '$1,$2');

test('Operations per second', () => {
  suite
    .add('v1.0.0', () => {
      inInterval({
        interval: '[1,1000]',
        value: 50,
      });
    })
    // tslint:disable-next-line
    .on('cycle', (event: any) => {
      const { name, hz } = event.target;
      const hzParsed = formatNumber(hz.toFixed(0)).padStart(9);

      process.stdout.write(`${name}: ${hzParsed} ops/sec\n`);
    })
    .run();
});
