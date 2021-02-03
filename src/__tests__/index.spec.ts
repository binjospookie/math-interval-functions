import { inInterval } from '../';

describe('InInterval tests', () => {
  test('open', () => {
    expect(
      inInterval({
        interval: '(100,500)',
        value: 120,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(1,5)',
        value: 1,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '(1,5)',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '(-1,5)',
        value: 1,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,5)',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '(-1,-5)',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '(,-5)',
        value: -100,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,)',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,)',
        value: -5,
      }),
    ).toBeFalsy();
  });

  test('closed', () => {
    expect(
      inInterval({
        interval: '[1,5]',
        value: 1,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[1,5]',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,5]',
        value: 1,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,5]',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,-5]',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '[,-5]',
        value: -100,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,]',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,]',
        value: -5,
      }),
    ).toBeFalsy();
  });

  test('leftOpen', () => {
    expect(
      inInterval({
        interval: '(1,5]',
        value: 1,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '(1,5]',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,5]',
        value: 1,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,5]',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,-5]',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '(,-5]',
        value: -100,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,]',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(-1,]',
        value: -1,
      }),
    ).toBeFalsy();
  });

  test('rightOpen', () => {
    expect(
      inInterval({
        interval: '[1,5)',
        value: 1,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[1,5)',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '[-1,5)',
        value: 1,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,5)',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '[-1,-5)',
        value: 5,
      }),
    ).toBeFalsy();
    expect(
      inInterval({
        interval: '[,-5)',
        value: -100,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,)',
        value: 5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-1,)',
        value: -1,
      }),
    ).toBeTruthy();
  });

  test('incorrect interval', () => {
    expect(
      inInterval({
        interval: '123jkvb12h3b12h3',
        value: 5,
      }),
    ).toBeFalsy();
  });

  test('zero', () => {
    expect(
      inInterval({
        interval: '[-10,0]',
        value: -5,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[-10,0]',
        value: 1,
      }),
    ).toBeFalsy();
  });

  test('inf', () => {
    expect(
      inInterval({
        interval: '[1,)',
        value: Infinity,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(1,)',
        value: Infinity,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '(1,]',
        value: Infinity,
      }),
    ).toBeTruthy();
    expect(
      inInterval({
        interval: '[1,]',
        value: Infinity,
      }),
    ).toBeTruthy();
  });
});
