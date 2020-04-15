# math-interval

## Examples

```javascript
inInterval('(1,5)', 1); // false
inInterval('[1,5)', 1); // true
inInterval('[1,5)', 5); // false
inInterval('[1,5]', 5); // true
inInterval('(1,5]', 5); // true
inInterval('(,5]', 5); // true
inInterval('(,5]', 1); // true
```

## More examples
```javascript
test('open', () => {
  expect(inInterval('(1,5)', 1)).toBeFalsy();
  expect(inInterval('(1,5)', 5)).toBeFalsy();
  expect(inInterval('(-1,5)', 1)).toBeTruthy();
  expect(inInterval('(-1,5)', 5)).toBeFalsy();
  expect(inInterval('(-1,-5)', 5)).toBeFalsy();
  expect(inInterval('(,-5)', -100)).toBeTruthy();
  expect(inInterval('(-1,)', 5)).toBeTruthy();
  expect(inInterval('(-1,)', -5)).toBeFalsy();
});

test('closed', () => {
  expect(inInterval('[1,5]', 1)).toBeTruthy();
  expect(inInterval('[1,5]', 5)).toBeTruthy();
  expect(inInterval('[-1,5]', 1)).toBeTruthy();
  expect(inInterval('[-1,5]', 5)).toBeTruthy();
  expect(inInterval('[-1,-5]', 5)).toBeFalsy();
  expect(inInterval('[,-5]', -100)).toBeTruthy();
  expect(inInterval('[-1,]', 5)).toBeTruthy();
  expect(inInterval('[-1,]', -5)).toBeFalsy();
});

test('leftOpen', () => {
  expect(inInterval('(1,5]', 1)).toBeFalsy();
  expect(inInterval('(1,5]', 5)).toBeTruthy();
  expect(inInterval('(-1,5]', 1)).toBeTruthy();
  expect(inInterval('(-1,5]', 5)).toBeTruthy();
  expect(inInterval('(-1,-5]', 5)).toBeFalsy();
  expect(inInterval('(,-5]', -100)).toBeTruthy();
  expect(inInterval('(-1,]', 5)).toBeTruthy();
  expect(inInterval('(-1,]', -1)).toBeFalsy();
});

test('rightOpen', () => {
  expect(inInterval('[1,5)', 1)).toBeTruthy();
  expect(inInterval('[1,5)', 5)).toBeFalsy();
  expect(inInterval('[-1,5)', 1)).toBeTruthy();
  expect(inInterval('[-1,5)', 5)).toBeFalsy();
  expect(inInterval('[-1,-5)', 5)).toBeFalsy();
  expect(inInterval('[,-5)', -100)).toBeTruthy();
  expect(inInterval('[-1,)', 5)).toBeTruthy();
  expect(inInterval('[-1,)', -1)).toBeTruthy();
});

test('incorrect interval', () => {
  expect(inInterval('123jkvb12h3b12h3', 5)).toBeFalsy();
});

test('zero', () => {
  expect(inInterval('[-10,0]', -5)).toBeTruthy();
  expect(inInterval('[-10,0]', 1)).toBeFalsy();
});
```
