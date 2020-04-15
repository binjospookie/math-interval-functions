import { inInterval } from '../';

describe('Common tests', () => {
  test('pep', () => {
    expect(inInterval('[1,5]', 5)).toBe(true);
    expect(inInterval('[1,5)', 5)).toBe(false);
    expect(inInterval('[1,5)', 1)).toBe(true);
    expect(inInterval('(1,5)', 1)).toBe(false);
    expect(inInterval('(1,5]', 1)).toBe(false);
    expect(inInterval('12wdsaws', 1)).toBe(false);
    expect(inInterval('(,5]', 1)).toBe(true);
    expect(inInterval('[,5]', 1)).toBe(true);
    expect(inInterval('[1,]', 1)).toBe(false);
  });
});
