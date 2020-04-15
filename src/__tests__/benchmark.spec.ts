// @ts-ignore
import * as benchmarkSpec from 'benchmark';
import { bold } from 'chalk';

import { inInterval } from '../index';

const suite = new benchmarkSpec.Suite();

const formatNumber = (x: number) =>
  String(x)
    .replace(/\d{3}$/, ',$&')
    .replace(/^(\d)(\d{3})/, '$1,$2');

test('Operations per second', () => {
  suite
    .add('v0.0.1', () => {
      inInterval('[1,100]', 50);
    })
    // tslint:disable-next-line
    .on('cycle', (event: any) => {
      const { name, hz } = event.target;
      const hzParsed = formatNumber(hz.toFixed(0)).padStart(9);

      process.stdout.write(`${name}: ${bold(hzParsed)} ops/sec\n`);
    })
    .run();
});
